import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const total = project.screenshots.length;
  const current = project.screenshots[activeIdx] ??
    project.screenshots[0] ?? {
      number: "01",
      title: project.title.replace("\n", " "),
      description: project.overview,
      src: "",
    };
  const totalFormatted = total < 10 ? `0${total}` : `${total}`;

  const handlePrev = () => {
    setActiveIdx((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => Math.min(total - 1, prev + 1));
  };

  return (
    <div className="project-details">
      {/* Kolom 1: Screenshot besar */}
      <div className="project-gallery-column">
        <div
          className="gallery-viewport"
          role="region"
          aria-label={`Screenshot fitur ${current.number} dari ${totalFormatted}`}
        >
          <img
            src={current.src}
            alt={`${project.title.replace("\n", " ")} - ${current.title}`}
            className="gallery-image gallery-image-clickable"
            onClick={() => setModalOpen(true)}
            title="Klik untuk memperbesar screenshot"
          />
          <div className="gallery-badge">
            <span>
              {current.number} / {totalFormatted}
            </span>
          </div>
          <button
            type="button"
            className="gallery-enlarge-hint"
            onClick={() => setModalOpen(true)}
            aria-label="Perbesar screenshot"
          >
            <Expand aria-hidden="true" />
            <span>Perbesar</span>
          </button>
        </div>

        {/* Thumbnail / Nomor navigasi cepat */}
        <div className="gallery-thumbs-row" role="tablist" aria-label="Pilih screenshot fitur">
          {project.screenshots.map((s, idx) => (
            <button
              key={s.number}
              type="button"
              role="tab"
              aria-selected={idx === activeIdx}
              aria-label={`Fitur ${s.number}: ${s.title}`}
              className={`gallery-thumb-btn${idx === activeIdx ? " is-active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              {s.number}
            </button>
          ))}
        </div>
      </div>

      {/* Kolom 2: Informasi fitur & detail project di sisi lainnya */}
      <div className="project-info-column">
        <div className="gallery-feature-block">
          <div className="gallery-header">
            <span className="gallery-indicator">
              {current.number} / {totalFormatted}
            </span>
            <div className="gallery-nav-group">
              <button
                type="button"
                className="gallery-nav-btn"
                onClick={handlePrev}
                disabled={activeIdx === 0}
                aria-label="Screenshot sebelumnya"
              >
                <ArrowLeft aria-hidden="true" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                className="gallery-nav-btn"
                onClick={handleNext}
                disabled={activeIdx === total - 1}
                aria-label="Screenshot berikutnya"
              >
                <span>Next</span>
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="gallery-feature-body">
            <p className="gallery-feature-eyebrow">Nama Fitur</p>
            <h4 className="gallery-feature-title">{current.title}</h4>
            <p className="gallery-feature-desc">{current.description}</p>
          </div>
        </div>

        <div className="project-meta-details">
          <div className="project-overview">
            <span>Overview</span>
            {project.overview}
          </div>
          <div className="project-detail-grid">
            <p>
              <span>Role</span>
              {project.role}
            </p>
            <div className="project-features">
              <span>Key features</span>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <p>
              <span>Tech stack</span>
              {project.stack.length
                ? project.stack.join(" · ")
                : "Project-specific technologies not provided"}
            </p>
          </div>
        </div>
      </div>

      {/* Modal Dialog untuk tampilan screenshot penuh */}
      <ProjectDetailModal
        project={project}
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialIndex={activeIdx}
        onIndexChange={setActiveIdx}
      />
    </div>
  );
}

interface ProjectDetailModalProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
}

export function ProjectDetailModal({
  project,
  open,
  onOpenChange,
  initialIndex = 0,
  onIndexChange,
}: ProjectDetailModalProps) {
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  useEffect(() => {
    setActiveIdx(initialIndex);
  }, [initialIndex, open]);

  const total = project.screenshots.length;
  const current = project.screenshots[activeIdx] ??
    project.screenshots[0] ?? {
      number: "01",
      title: project.title.replace("\n", " "),
      description: project.overview,
      src: "",
    };
  const totalFormatted = total < 10 ? `0${total}` : `${total}`;

  const setIndex = (idx: number) => {
    setActiveIdx(idx);
    if (onIndexChange) onIndexChange(idx);
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setIndex(activeIdx - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < total - 1) {
      setIndex(activeIdx + 1);
    }
  };

  // Keyboard navigation: ArrowLeft & ArrowRight
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIdx((prev) => {
          const nextIdx = Math.max(0, prev - 1);
          if (onIndexChange) onIndexChange(nextIdx);
          return nextIdx;
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIdx((prev) => {
          const nextIdx = Math.min(total - 1, prev + 1);
          if (onIndexChange) onIndexChange(nextIdx);
          return nextIdx;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, total, onIndexChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="project-modal-content">
        <DialogHeader className="project-modal-header">
          <div className="project-modal-topline">
            <span className="eyebrow">
              <span className="status-dot" /> {project.number} / 04 — {project.type}
            </span>
          </div>
          <DialogTitle className="project-modal-title">
            {project.title.replace("\n", " ")}
          </DialogTitle>
          <DialogDescription className="project-modal-desc">{project.overview}</DialogDescription>
          {project.stack.length > 0 && (
            <div className="project-modal-stack">
              {project.stack.map((item) => (
                <span key={item} className="modal-stack-badge">
                  {item}
                </span>
              ))}
            </div>
          )}
        </DialogHeader>

        {/* Layout editorial modal: Screenshot besar di kiri, info di kanan */}
        <div className="project-modal-editorial">
          <div className="project-modal-visual">
            <div className="modal-img-container">
              <img
                src={current.src}
                alt={`${project.title.replace("\n", " ")} - ${current.title}`}
                className="modal-full-img"
              />
              <span className="modal-img-counter">
                {current.number} / {totalFormatted}
              </span>
            </div>
          </div>

          <div className="project-modal-sidebar">
            <div className="gallery-header">
              <span className="gallery-indicator">
                {current.number} / {totalFormatted}
              </span>
              <div className="gallery-nav-group">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  className="gallery-nav-btn"
                  aria-label="Screenshot sebelumnya"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  <span>Prev</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleNext}
                  disabled={activeIdx === total - 1}
                  className="gallery-nav-btn"
                  aria-label="Screenshot berikutnya"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

            <div className="gallery-feature-body">
              <p className="gallery-feature-eyebrow">Fitur {current.number}</p>
              <h4 className="gallery-feature-title">{current.title}</h4>
              <p className="gallery-feature-desc">{current.description}</p>
            </div>

            <div className="modal-thumbs-section">
              <p className="gallery-feature-eyebrow">Daftar Fitur ({total})</p>
              <div className="modal-thumbs-grid" role="tablist">
                {project.screenshots.map((s, idx) => (
                  <button
                    key={s.number}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIdx}
                    className={`modal-thumb-item${idx === activeIdx ? " is-active" : ""}`}
                    onClick={() => setIndex(idx)}
                    title={s.title}
                  >
                    <span className="thumb-item-num">{s.number}</span>
                    <span className="thumb-item-title">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

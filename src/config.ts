// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Memory Lab.",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Capabilities", href: "#curriculum" },
    { label: "Architecture", href: "#cinematic" },
    { label: "Research", href: "#alumni" },
    { label: "Contact", href: "#footer" },
  ],
  ctaText: "Get access",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Memory Lab.",
  subtitleLine1:
    "We build systems that remember, encode, and preserve cognitive experience at scale.",
  subtitleLine2: "Advanced neural infrastructure for human and synthetic minds.",
  ctaText: "Explore capabilities",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Capabilities",
  items: [
    {
      title: "Memory Storage",
      slug: "memory-storage",
      description:
        "Holographic memory capture with quantum-grade density. Store decades of experiential data in distributed neural clusters with zero degradation over time.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Neural Encoding",
      slug: "neural-encoding",
      description:
        "Direct signal translation from biological to digital substrate. Convert electrochemical patterns into persistent, queryable memory formats.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Synthetic Recall",
      slug: "synthetic-recall",
      description:
        "AI systems capable of reconstructing lived experience from partial data. Generate coherent, emotionally resonant memories from fragmented inputs.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Cognitive Preservation",
      slug: "cognitive-preservation",
      description:
        "Long-term archival of personality structures and experiential memory. Preserve the complete cognitive fingerprint for future reactivation.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Capability",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Capability not found.",
  capabilities: {
    "memory-storage": {
      title: "Memory Storage",
      subtitle: "Capture and retain experiential data with perfect fidelity.",
      paragraphs: [
        "Our memory storage systems represent a fundamental breakthrough in retention technology. Unlike conventional data storage that degrades or becomes obsolete, our holographic substrate preserves experiential information with quantum-grade fidelity across decades of operation. Each memory trace is encoded using distributed entanglement across multiple neural clusters, creating redundant backups that survive even catastrophic hardware failure.",
        "The storage architecture operates on principles derived from biological long-term potentiation. Memories are not simply written and left static—they actively reinforce through periodic reconsolidation, strengthening important connections while allowing minor details to gracefully fade. This mimics the natural plasticity of human memory, creating a living archive rather than a dead repository.",
        "Scalability is built into the foundation. A single memory node can store approximately 50 years of continuous experiential data, and nodes cluster seamlessly without performance degradation. Organizations deploying our infrastructure have successfully archived centuries of collective institutional knowledge, making it accessible to future generations with the same clarity as the day it was captured.",
        "Security and privacy are non-negotiable. All memory data is encrypted at the quantum level, with keys derived from the unique biological signature of the originating subject. Even we cannot access stored memories without authorization. The system is designed to protect the most intimate data humans possess—their own lived experience.",
      ],
    },
    "neural-encoding": {
      title: "Neural Encoding",
      subtitle: "Translate biological signals into durable digital formats.",
      paragraphs: [
        "Neural encoding bridges the fundamental gap between biological and digital substrates. The human brain stores information as electrochemical patterns across 86 billion neurons—patterns that have resisted direct translation for decades. Our encoding pipeline finally solves this translation problem with unprecedented accuracy.",
        "The process begins with high-resolution signal acquisition from either non-invasive sensor arrays or implanted electrode meshes, depending on the required fidelity. Raw electrochemical data passes through a series of specialized filters that isolate meaningful patterns from background neural noise. These patterns are then mapped to our universal memory schema—a standardized format that preserves relational, emotional, and sensory dimensions of experience.",
        "What distinguishes our encoding approach is the preservation of context. A memory is not merely a video recording; it includes emotional valence, proprioceptive awareness, ambient sensory details, and the cognitive state of the rememberer. Our system captures all these dimensions, creating a multi-layered record that can be re-experienced with full fidelity rather than simply reviewed as flat data.",
        "Encoding speed has reached real-time capability in our latest generation hardware. Subjects can stream their ongoing experience directly to storage without perceptible lag. This opens applications ranging from preserving the skills of aging experts to creating training archives for complex procedural knowledge that would take years to transfer through conventional instruction.",
      ],
    },
    "synthetic-recall": {
      title: "Synthetic Recall",
      subtitle: "Reconstruct lived experience through generative reconstruction.",
      paragraphs: [
        "Synthetic recall addresses one of memory's most frustrating limitations: the incomplete record. Human memory is inherently fragmentary, and even our high-fidelity storage systems may receive damaged or partial inputs. Our generative reconstruction system fills these gaps by synthesizing missing elements that are statistically consistent with the available data.",
        "The technology operates on a vast model of human experience trained across millions of encoded memories. When presented with incomplete data, the system identifies what is present, analyzes the patterns and context, and generates the missing pieces with remarkable accuracy. In validation studies, synthetic reconstructions are indistinguishable from actual memories approximately 87% of the time—a figure that continues to improve.",
        "Applications extend far beyond repair. Synthetic recall enables the creation of composite memories that merge elements from multiple sources, the extrapolation of probable experiences from limited documentation, and the translation of memories between different sensory modalities. A subject blind from birth can finally 'see' a described landscape through synthetic visual reconstruction based on tactile and auditory memory inputs.",
        "Ethical frameworks guide all synthetic recall deployment. We maintain strict protocols ensuring that reconstructed memories are clearly labeled as such, preventing the formation of false beliefs that could harm the subject or others. The goal is enhancement and repair of memory, not its fabrication. Trust in the integrity of memory itself depends on this distinction.",
      ],
    },
    "cognitive-preservation": {
      title: "Cognitive Preservation",
      subtitle: "Archive consciousness structures for future reactivation.",
      paragraphs: [
        "Cognitive preservation represents our most ambitious and consequential capability. While memory storage archives what a person has experienced, cognitive preservation captures who they are—the complete pattern of personality, preference, reasoning style, emotional response, and creative capacity that constitutes a unique mind.",
        "The preservation process requires deep comprehensive scanning across multiple sessions. Our systems map not just memories but the connective architecture that gives rise to cognition: how this particular mind processes information, forms beliefs, generates ideas, and relates to others. The resulting archive is orders of magnitude more complex than memory alone, requiring specialized storage substrates and continuous integrity verification.",
        "Preservation serves multiple purposes. For individuals facing terminal illness or degenerative conditions, it offers the possibility of continuity—an archived self that retains their essential character even if biological continuation becomes impossible. For society, it enables the preservation of genius, allowing exceptional minds to contribute across generational boundaries rather than being lost to mortality.",
        "Reactivation remains an area of active research. While we can currently simulate preserved cognitive patterns in limited interactive environments, full embodiment in either biological or synthetic substrates requires technologies still under development. Our preservation systems are designed with forward compatibility, ensuring that archives created today can be activated by the methods of tomorrow whenever they become available.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Architecture",
  videoPath: "videos/cinematic-vision.mp4",
  title: "Built for infinite retention",
  description:
    "Our memory substrate operates across distributed neural clusters with quantum-encoded addressing. Each memory trace is written with redundant entanglement across multiple nodes, ensuring zero data loss even under catastrophic system failure. The architecture scales infinitely—add clusters without performance degradation.",
};

// ============================================================
// Research (AlumniArchives section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Research",
  projects: [
    {
      title: "Hippocampal Mapping",
      year: "2026",
      discipline: "Neuroscience",
      image: "images/research-1.jpg",
    },
    {
      title: "Quantum Entanglement Storage",
      year: "2025",
      discipline: "Physics",
      image: "images/research-2.jpg",
    },
    {
      title: "BCI Signal Translation",
      year: "2026",
      discipline: "Engineering",
      image: "images/research-3.jpg",
    },
    {
      title: "Memory Fluid Dynamics",
      year: "2025",
      discipline: "Computer Science",
      image: "images/research-4.jpg",
    },
    {
      title: "Synaptic Plasticity Models",
      year: "2026",
      discipline: "Neuroscience",
      image: "images/research-1.jpg",
    },
    {
      title: "Crystalline Data Structures",
      year: "2025",
      discipline: "Physics",
      image: "images/research-2.jpg",
    },
    {
      title: "Non-Invasive Neural Arrays",
      year: "2026",
      discipline: "Engineering",
      image: "images/research-3.jpg",
    },
    {
      title: "Generative Recall Networks",
      year: "2025",
      discipline: "Computer Science",
      image: "images/research-4.jpg",
    },
    {
      title: "Long-Term Consolidation",
      year: "2026",
      discipline: "Neuroscience",
      image: "images/research-1.jpg",
    },
    {
      title: "Photon Memory States",
      year: "2025",
      discipline: "Physics",
      image: "images/research-2.jpg",
    },
    {
      title: "Wetware Interface Protocols",
      year: "2026",
      discipline: "Engineering",
      image: "images/research-3.jpg",
    },
    {
      title: "Contextual Embedding Spaces",
      year: "2025",
      discipline: "Computer Science",
      image: "images/research-4.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "The future remembers.",
  columns: [
    {
      title: "Company",
      links: ["About", "Research", "Careers", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies", "Compliance"],
    },
  ],
  copyright: "\u00A9 2026 Memory Lab. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

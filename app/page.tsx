"use client";

import { useState } from "react";
import { Section } from "../components/Section";

const buildingBlocks = [
  {
    title: "Context Encoder",
    detail:
      "Use scenario metadata (location, time, weather, social setting) from LDOS-CoMoDa to learn structured context embeddings."
  },
  {
    title: "Habit Graph",
    detail:
      "Model user habits as a bipartite graph linking contexts to behavior atoms with weighted repetition and reinforcement signals."
  },
  {
    title: "Neuro-Symbolic Policy",
    detail:
      "Combine differentiable reasoning over the habit graph with a neural recommender backbone to transfer habits across contexts."
  }
];

const milestones = [
  {
    heading: "Data Curation",
    bullets: [
      "Normalize LDOS-CoMoDa CSVs, encode categorical facets, derive temporal buckets.",
      "Compute repetition counts and reinforcement scores (e.g., rating ≥ 4) per context-behavior pair."
    ]
  },
  {
    heading: "Representation Learning",
    bullets: [
      "Train context encoder (transformer or TabNet) to produce compositional embeddings.",
      "Embed items and behavior atoms with shared semantic space using contrastive loss."
    ]
  },
  {
    heading: "Neuro-Symbolic Fusion",
    bullets: [
      "Project habit graph edges with learnable weights into neural scoring model.",
      "Use differentiable logic (Gödel t-norm) to compose habits under new contexts."
    ]
  },
  {
    heading: "Evaluation & Transfer",
    bullets: [
      "Use leave-one-context-out splits to test transfer.",
      "Track Hit@K, NDCG, and a habit-transfer score (success on unseen context)."
    ]
  }
];

const stack = [
  {
    title: "Feature Engineering",
    items: [
      "Python + Pandas + Polars for efficient preprocessing",
      "Great Expectations for data validation against schema drifts",
      "Weights & Biases tables to log habit statistics"
    ]
  },
  {
    title: "Neuro Module",
    items: [
      "PyTorch Lightning for reproducible training loops",
      "PyG (PyTorch Geometric) to operate on habit graphs",
      "Hydra for composable experiment configs"
    ]
  },
  {
    title: "Symbolic Layer",
    items: [
      "Renoir or LogicENN for differentiable logic programs",
      "Neo4j / Memgraph as backing store for habit graph snapshots",
      "Datalog rules compiled to TorchScript kernels"
    ]
  },
  {
    title: "Serving & Monitoring",
    items: [
      "FastAPI for inference service with context-aware endpoints",
      "Feast or Tecton to materialize context features in real time",
      "Grafana dashboards tracking habit drift and transfer success"
    ]
  }
];

const pipelines = [
  {
    label: "Offline Training",
    steps: [
      "Ingest LDOS-CoMoDa data, derive context tensors, build habit graph store.",
      "Pre-train context and behavior embeddings with contrastive context-behavior pairs.",
      "Train neuro-symbolic recommender with multi-task objectives (rating prediction, transfer contrastive loss).",
      "Validate on held-out contexts, perform ablation vs. neural-only baseline."
    ]
  },
  {
    label: "Online Adaptation",
    steps: [
      "Capture live feedback as reinforcement to update habit weights incrementally.",
      "Use graph streaming (Incremental PageRank) to refresh habit influence scores.",
      "Distill symbolic conclusions back into neural adapter via knowledge distillation step.",
      "Monitor for context novelty using Mahalanobis distance; trigger few-shot fine-tuning if high."
    ]
  }
];

const quickStart = [
  {
    title: "1. Data Lake",
    body:
      "Load LDOS-CoMoDa into DuckDB; run dbt models to standardize dimensions (context, item, user)."
  },
  {
    title: "2. Habit Tensor Builder",
    body:
      "Pivot context facets into binary indicators, compute habit strength H = α·Repetition + β·PositiveReinforcement."
  },
  {
    title: "3. Graph Construction",
    body:
      "Create edges Context → Behavior with edge attributes (frequency, reinforcement, recency)."
  },
  {
    title: "4. Hybrid Model",
    body:
      "Fuse graph neural network over habit graph with transformer recommender; expose symbolic rules as constraints."
  },
  {
    title: "5. Transfer Evaluation",
    body:
      "Implement context-swap experiments to verify transfer; record metrics in experiment tracker."
  },
  {
    title: "6. Deployment",
    body:
      "Wrap inference pipeline in FastAPI; containerize; integrate with CARS platform decision loop."
  }
];

export default function Home() {
  const [selectedPipeline, setSelectedPipeline] = useState(pipelines[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 pb-16 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <header className="mb-12 space-y-6 text-center">
          <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 text-sm font-semibold text-secondary">
            Neuro-Symbolic Contextual Recommenders
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Compositional Generalization Blueprint for Habits in CARS
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            A streamlined implementation path to integrate human-like habit
            composition into neuro-symbolic recommender systems using the
            LDOS-CoMoDa dataset. Aligns the habit equation H = Context ∘
            Behavior(Repetition + Reinforcement) with modern hybrid AI tooling.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          {buildingBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >
              <h3 className="mb-2 text-xl font-semibold text-primary">
                {block.title}
              </h3>
              <p className="text-sm text-slate-600">{block.detail}</p>
            </div>
          ))}
        </div>

        <main className="mt-12 space-y-10">
          <Section title="1. Habit-Centric Data Pipeline" eyebrow="Foundation">
            <p>
              Start with LDOS-CoMoDa, consolidating contextual facets (time,
              weather, companionship, location) into structured tensors. Encode
              each facet with domain-informed vocabularies and derive composite
              context keys (e.g., &quot;Rainy+Evening+Friends&quot;).
            </p>
            <p>
              The habit equation maps to a weighted edge in the habit graph:
              <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm">
                HabitStrength = w_c × ContextEmbedding ⊗ (w_r × Repetition +
                w_p × PositiveReinforcement)
              </code>
              . Calibrate weights with Bayesian optimization to capture subject
              variability.
            </p>
            <p>
              Persist curated datasets as parquet in a feature store (Feast) to
              guarantee online/offline parity. Adopt data versioning (DVC) for
              reproducibility.
            </p>
          </Section>

          <Section
            title="2. Compositional Representation Strategy"
            eyebrow="Representation"
          >
            <p>
              Context encoder: train a transformer over context tokens with
              masked-context prediction, enabling permutation-invariant
              embeddings. Introduce a factorized latent space to support
              recombination when encountering unseen context compositions.
            </p>
            <p>
              Behavior encoder: treat item-consumption tuples as behavior atoms.
              Learn embeddings via contrastive learning using user sessions,
              ensuring alignment with context vectors. Use parameter sharing to
              encourage cross-context transfer.
            </p>
            <p>
              Habit graph encoder: apply a Relational GNN (R-GCN) where relation
              types correspond to reinforcement regimes. Node features include
              recency decay and cross-context similarity scores.
            </p>
          </Section>

          <Section title="3. Neuro-Symbolic Fusion" eyebrow="Hybrid Layer">
            <p>
              Define differentiable logic rules capturing the habit equation,
              such as: if context A shares ≥ τ similarity with context B and
              habit strength exceeds θ, recommend behavior B. Implement with
              Gödel t-norm fuzzy logic to remain gradient-friendly.
            </p>
            <p>
              Inject symbolic priors as soft constraints into the neural scorer:
              add penalty terms when neural recommendations violate high-confidence
              habit rules. This maintains interpretability while letting the
              network override outdated habits.
            </p>
            <p>
              Leverage constraint-aware optimization (e.g., LagVAE or Deep Lagrangian
              Networks) to balance neural loss and symbolic regularizers.
            </p>
          </Section>

          <Section title="4. Training Signals" eyebrow="Learning Loops">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-900">Primary:</span>{" "}
                rating prediction (MSE) and implicit feedback (BPR loss).
              </li>
              <li>
                <span className="font-semibold text-slate-900">Auxiliary:</span>{" "}
                context reconstruction, habit rule satisfaction, transfer
                contrastive loss (encourage unseen-context performance).
              </li>
              <li>
                <span className="font-semibold text-slate-900">Curriculum:</span>{" "}
                schedule from single-context tasks to multi-context transfers to
                increase compositional robustness.
              </li>
            </ul>
          </Section>

          <Section title="5. Minimal Evaluation Protocol" eyebrow="Metrics">
            <p>
              Split LDOS-CoMoDa by context families; hold out combinations to
              test transfer. Evaluate with Hit@{`{1,5,10}`}, NDCG@K, and a Habit
              Transfer Score (success rate on unseen context combos).
            </p>
            <p>
              Visualize latent space with UMAP to verify context blending.
              Analyze symbolic rule activations against neural scores to ensure
              interpretable alignment.
            </p>
            <p>
              Track fairness across demographic or situational slices to avoid
              overfitting to majority contexts.
            </p>
          </Section>

          <Section title="6. Tech Stack Reference" eyebrow="Tooling">
            <div className="grid gap-6 md:grid-cols-2">
              {stack.map((column) => (
                <div key={column.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">
                    {column.title}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="7. Execution Milestones" eyebrow="Roadmap">
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.heading}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {milestone.heading}
                  </h3>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-slate-600">
                    {milestone.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="8. Pipeline Orchestration" eyebrow="Ops View">
            <div className="flex flex-wrap gap-4">
              {pipelines.map((pipeline) => (
                <button
                  key={pipeline.label}
                  onClick={() => setSelectedPipeline(pipeline)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selectedPipeline.label === pipeline.label
                      ? "border-primary bg-primary text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  {pipeline.label}
                </button>
              ))}
            </div>
            <ol className="mt-5 space-y-3 text-sm text-slate-600">
              {selectedPipeline.steps.map((step) => (
                <li
                  key={step}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ol>
          </Section>

          <Section title="9. Quick Start Checklist" eyebrow="Actionables">
            <div className="grid gap-4 md:grid-cols-2">
              {quickStart.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="10. Research Extensions" eyebrow="Forward Look">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                Meta-learn habit priors per user cluster to accelerate cold-start
                contexts.
              </li>
              <li>
                Incorporate causal discovery to distinguish spurious vs. structural
                habit links.
              </li>
              <li>
                Explore program synthesis to auto-generate symbolic rules from
                habit traces.
              </li>
              <li>
                Benchmark compositional generalization vs. LLM-based planning
                agents across context transfers.
              </li>
            </ul>
          </Section>
        </main>
      </div>
    </div>
  );
}

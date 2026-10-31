export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Distributed Systems & Backend' | 'Full-Stack SaaS' | 'Modern Frontend & WebGL' | 'Cloud Architecture';
  featured: boolean;
  image: string;
  problem: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    architectureDiagram: {
      steps: { title: string; description: string; tech: string }[];
    };
    challenges: { title: string; resolution: string }[];
    benchmarks: { metric: string; before: string; after: string }[];
    codeSnippet: {
      filename: string;
      language: string;
      code: string;
    };
    takeaways: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    years: number;
    highlight: string;
    featured?: boolean;
  }[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const PORTFOLIO_INFO = {
  name: 'Amos Kipkirui',
  title: 'Senior Full-Stack Digital Engineer & Systems Architect',
  location: 'Nairobi, Kenya • Available Worldwide (Remote / Hybrid)',
  email: 'akipkirui2024@gmail.com',
  github: 'https://github.com/akipkirui',
  linkedin: 'https://linkedin.com/in/akipkirui',
  availabilityStatus: 'Available for Q2/Q3 Projects',
  tagline: 'Engineering High-Performance Web Applications & Scalable Systems.',
  bio: 'Senior full-stack engineer and distributed systems architect with 8+ years crafting resilient cloud platforms, low-latency APIs, and design-grade interactive web experiences. Bridging rigorous infrastructure engineering with polished, user-centered digital products.',
  metrics: [
    { label: 'Years in Production', value: '8+', detail: 'Enterprise & scale-up systems' },
    { label: 'System Uptime Delivered', value: '99.98%', detail: 'High-availability SLAs' },
    { label: 'Production Deployments', value: '45+', detail: 'Cloud-native services' },
    { label: 'P99 API Latency', value: '<100ms', detail: 'Optimized hotpaths' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'kestra-cloud',
    title: 'Kestra Cloud Engine',
    subtitle: 'Distributed workflow orchestration and real-time event telemetry engine',
    category: 'Distributed Systems & Backend',
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    problem: 'Client had legacy ETL batch jobs stalling over 3.5 hours with zero real-time visibility into cross-service failures and worker bottlenecks.',
    solution: 'Architected a decoupled, event-driven orchestration engine utilizing Redis Streams, Go worker daemons, and gRPC mesh for sub-15ms task routing.',
    impact: 'Reduced mean task latency by 78% while scaling to 2.4 million concurrent event transactions daily with zero dropped messages.',
    metrics: [
      { label: 'Throughput', value: '2.4M jobs/day' },
      { label: 'P99 Latency', value: '14.2 ms' },
      { label: 'Cost Reduction', value: '42%' }
    ],
    tags: ['Go', 'TypeScript', 'Redis Streams', 'gRPC', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/akipkirui/kestra-cloud-engine',
    liveUrl: 'https://kestra-engine-demo.internal.io',
    caseStudy: {
      overview: 'Designed from first principles to replace monolithic Celery workers with a zero-lock, memory-efficient distributed pipeline capable of auto-scaling under volatile spike workloads.',
      architectureDiagram: {
        steps: [
          { title: 'Ingress Gateway', description: 'HTTP/2 & gRPC edge proxy validating schemas and signing tokens.', tech: 'Go / Envoy' },
          { title: 'Buffer & Partitioning', description: 'Persistent partitioned message log with consumer groups.', tech: 'Redis Cluster' },
          { title: 'Worker Pool', description: 'Stateless worker pools executing idempotent tasks with auto-backoff.', tech: 'Go Daemons / K8s' },
          { title: 'Telemetry Store', description: 'Columnar storage for real-time audit queries and execution traces.', tech: 'Timescale / Postgres' }
        ]
      },
      challenges: [
        {
          title: 'Distributed State Synchronization',
          resolution: 'Implemented raft-consensus leases with Redis lock TTLs to prevent split-brain worker executions during network partitions.'
        },
        {
          title: 'Memory Bloat in High-Volume JSON Payloads',
          resolution: 'Migrated internal worker serialization from raw JSON to Protocol Buffers, cutting memory allocation by 64% and GC pause time by 82%.'
        }
      ],
      benchmarks: [
        { metric: 'Max Peak Concurrency', before: '4,500 tasks', after: '72,000 tasks' },
        { metric: 'Failure Recovery Time', before: '14 mins', after: '4.8 secs' },
        { metric: 'CPU Utilization per Node', before: '88% (hot)', after: '34% (steady)' }
      ],
      codeSnippet: {
        filename: 'pipeline/dispatcher.go',
        language: 'go',
        code: `package pipeline

type Dispatcher struct {
    client   *redis.Client
    workers  chan chan Job
    jobQueue chan Job
    maxWorkers int
}

func (d *Dispatcher) Run(ctx context.Context) {
    for i := 0; i < d.maxWorkers; i++ {
        worker := NewWorker(d.workers)
        worker.Start(ctx)
    }

    go func() {
        for {
            select {
            case <-ctx.Done():
                return
            case job := <-d.jobQueue:
                workerChannel := <-d.workers
                workerChannel <- job
            }
        }
    }()
}`
      },
      takeaways: [
        'Idempotency keys at the ingest layer eliminate 99.9% of duplication bugs during transient failovers.',
        'Binary protocols (gRPC/Protobuf) produce massive savings in high-throughput microservice fabrics.'
      ]
    }
  },
  {
    id: 'apex-protocol',
    title: 'Apex Protocol',
    subtitle: 'High-throughput real-time orderbook visualizer and algorithmic execution console',
    category: 'Full-Stack SaaS',
    featured: true,
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80',
    problem: 'Institutional traders struggled with DOM lag in browser-based trading terminals under high market volatility (>30,000 updates/sec).',
    solution: 'Built a hardware-accelerated WebGL/Canvas rendering pipeline with WebWorker data ingestion, eliminating main-thread JavaScript freezing.',
    impact: 'Sustained flawless 60 FPS under peak 50,000 market tick events per second with sub-millisecond DOM update latency.',
    metrics: [
      { label: 'Render Rate', value: '60 FPS fixed' },
      { label: 'Ingest Rate', value: '50k ticks/sec' },
      { label: 'Memory Footprint', value: '<48 MB' }
    ],
    tags: ['React', 'TypeScript', 'WebGL', 'WebSockets', 'WebWorkers', 'Tailwind CSS'],
    githubUrl: 'https://github.com/akipkirui/apex-protocol',
    liveUrl: 'https://apex-protocol.trade-preview.io',
    caseStudy: {
      overview: 'A zero-jank financial trading workstation designed for high-frequency algorithmic liquidity analysis and instant order routing.',
      architectureDiagram: {
        steps: [
          { title: 'WebSocket Worker', description: 'Dedicated background thread handling binary frames and diff compression.', tech: 'WebWorker API' },
          { title: 'Ring Buffer Queue', description: 'SharedArrayBuffer queue enabling lock-free data transfer to UI thread.', tech: 'TypedArrays' },
          { title: 'WebGL Canvas Render', description: 'Batch vertex rendering for depth charts and orderbook ladders.', tech: 'Three.js / Pixi' },
          { title: 'Reactive HUD', description: 'Micro-components subscribing to granular delta changes without rerenders.', tech: 'React 19 + Zustand' }
        ]
      },
      challenges: [
        {
          title: 'React Re-render Throttling',
          resolution: 'Bypassed React reconciliation entirely for the price ladder by binding canvas shaders directly to the WebWorker data stream.'
        },
        {
          title: 'WebSocket Disconnection Jitter',
          resolution: 'Implemented quadratic backoff reconnection with an offline delta snapshot cache, syncing missed blocks upon reconnect in <80ms.'
        }
      ],
      benchmarks: [
        { metric: 'Frame Drop Percentage', before: '32.4%', after: '0.02%' },
        { metric: 'Main Thread CPU Usage', before: '94%', after: '12%' },
        { metric: 'Data Serialization Latency', before: '18ms', after: '0.8ms' }
      ],
      codeSnippet: {
        filename: 'workers/orderbook-worker.ts',
        language: 'typescript',
        code: `// Offscreen high-frequency orderbook aggregator
self.onmessage = (event: MessageEvent<ArrayBuffer>) => {
  const view = new DataView(event.data);
  const orderCount = view.getUint16(0, true);
  
  // Direct zero-copy slice into pre-allocated Float64Array
  const bids = new Float64Array(event.data, 2, orderCount * 2);
  
  self.postMessage({ type: 'ORDERBOOK_DELTA', bids }, [bids.buffer]);
};`
      },
      takeaways: [
        'WebWorkers are essential when handling high-frequency binary streams in browser applications.',
        'Shared memory structures allow near-native performance inside modern browsers.'
      ]
    }
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Component Studio',
    subtitle: 'Zero-runtime overhead accessible UI kit with real-time token compiler',
    category: 'Modern Frontend & WebGL',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    problem: 'Cross-functional teams suffered from fragmented design implementations, high CSS bundle bloat (320kb+), and poor keyboard accessibility.',
    solution: 'Engineered an atomic, WCAG AAA compliant React component library with automated headless token generation and zero-runtime Tailwind v4 integration.',
    impact: 'Adopted across 14 enterprise frontend projects, reducing component implementation time by 60% and trimming asset bundle sizes by 85%.',
    metrics: [
      { label: 'Bundle Size', value: '14.2 KB (gzipped)' },
      { label: 'A11y Compliance', value: '100% WCAG AAA' },
      { label: 'Component Count', value: '42 primitives' }
    ],
    tags: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'Motion', 'Vite'],
    githubUrl: 'https://github.com/akipkirui/nexus-design-system',
    liveUrl: 'https://nexus-studio-docs.dev',
    caseStudy: {
      overview: 'Nexus is an enterprise design system engineered for high ergonomic developer experience, extreme visual craft, and zero accessibility compromises.',
      architectureDiagram: {
        steps: [
          { title: 'Figma Tokens Engine', description: 'JSON token schema parsed and synced directly via GitHub webhook.', tech: 'Node.js / AST' },
          { title: 'Atomic Primitives', description: 'Headless accessible behavioral core wrapping keyboard navigation.', tech: 'Radix Primitives' },
          { title: 'Styled Components', description: 'Zero-runtime CSS variables with modern container queries.', tech: 'Tailwind CSS v4' },
          { title: 'Interactive Studio', description: 'Live sandbox with code generation and contrast verification.', tech: 'React / Vite' }
        ]
      },
      challenges: [
        {
          title: 'Dynamic Theme Switching without Layout Shifts',
          resolution: 'Utilized CSS custom properties mapped to semantic slots, avoiding costly style recalculations during theme transitions.'
        },
        {
          title: 'Complex Keyboard Navigation in Nested Tree Views',
          resolution: 'Built a virtual roving-tabindex controller supporting WAI-ARIA authoring practices with zero focus trapping bugs.'
        }
      ],
      benchmarks: [
        { metric: 'Initial Bundle Weight', before: '320 KB', after: '14.2 KB' },
        { metric: 'Lighthouse Accessibility Score', before: '78 / 100', after: '100 / 100' },
        { metric: 'Time-to-Interactive (TTI)', before: '1.4s', after: '0.2s' }
      ],
      codeSnippet: {
        filename: 'primitives/Button.tsx',
        language: 'typescript',
        code: `import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-busy={isLoading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);`
      },
      takeaways: [
        'Accessible web components should be headless first, allowing unlimited aesthetic customization.',
        'CSS variables eliminate runtime CSS-in-JS performance bottlenecks.'
      ]
    }
  },
  {
    id: 'aether-copilot',
    title: 'Aether AI Copilot & Knowledge Graph',
    subtitle: 'Enterprise RAG search platform with hybrid vector indexing and citation verification',
    category: 'Distributed Systems & Backend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    problem: 'Internal knowledge base of 400k technical documents had 18% retrieval recall using keyword search, resulting in wasted engineering hours.',
    solution: 'Designed a hybrid retrieval architecture combining BM25 full-text indexing with HNSW vector embeddings and reranking cross-encoders.',
    impact: 'Increased search precision from 42% to 94.6% with sub-250ms end-to-end response times and verified document provenance.',
    metrics: [
      { label: 'Search Recall', value: '94.6%' },
      { label: 'Mean Latency', value: '235 ms' },
      { label: 'Docs Indexed', value: '450,000+' }
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL pgvector', 'Redis', 'React', 'Docker'],
    githubUrl: 'https://github.com/akipkirui/aether-knowledge-copilot',
    caseStudy: {
      overview: 'An enterprise knowledge synthesis engine designed to securely query internal technical documentation without hallucination risks.',
      architectureDiagram: {
        steps: [
          { title: 'Document Ingestion', description: 'Chunking markdown, code, and PDFs with semantic boundary detection.', tech: 'Python / LangChain' },
          { title: 'Vector & Keyword DB', description: 'Dual-index storage using pgvector HNSW and pg_trgm for full-text.', tech: 'PostgreSQL 16' },
          { title: 'Hybrid Reranker', description: 'Cross-encoder reranking top-50 candidate passages to top-5.', tech: 'FlashRank / PyTorch' },
          { title: 'Streaming Client', description: 'Server-Sent Events streaming token response with citation anchors.', tech: 'FastAPI / SSE' }
        ]
      },
      challenges: [
        {
          title: 'Cold Start Vector Query Latency',
          resolution: 'Implemented an in-memory Redis embedding cache for frequently queried entity clusters, reducing 60% of database roundtrips.'
        },
        {
          title: 'Document Revision Invalidation',
          resolution: 'Built an incremental change-data-capture pipeline to re-embed only modified paragraphs rather than full documents.'
        }
      ],
      benchmarks: [
        { metric: 'Top-5 Retrieval Precision', before: '42.1%', after: '94.6%' },
        { metric: 'Index Rebuild Time', before: '6.5 hours', after: '18 minutes' },
        { metric: 'P95 Query Latency', before: '1,850ms', after: '235ms' }
      ],
      codeSnippet: {
        filename: 'search/hybrid_retriever.py',
        language: 'python',
        code: `async def hybrid_search(query: str, top_k: int = 5) -> List[SearchResult]:
    query_vector = await embed_text(query)
    
    # Reciprocal Rank Fusion of Vector + Keyword matches
    async with db.transaction():
        results = await db.fetch("""
            WITH vector_matches AS (
                SELECT id, 1.0 / (ROW_NUMBER() OVER () + 60) AS rrf_score
                FROM documents
                ORDER BY embedding <=> $1 LIMIT 50
            ),
            keyword_matches AS (
                SELECT id, 1.0 / (ROW_NUMBER() OVER () + 60) AS rrf_score
                FROM documents
                WHERE text_search @@ plainto_tsquery($2) LIMIT 50
            )
            SELECT d.*, SUM(rrf.rrf_score) as final_score
            FROM (SELECT * FROM vector_matches UNION ALL SELECT * FROM keyword_matches) rrf
            JOIN documents d ON d.id = rrf.id
            GROUP BY d.id ORDER BY final_score DESC LIMIT $3;
        """, query_vector, query, top_k)
    return results`
      },
      takeaways: [
        'Reciprocal Rank Fusion consistently outperforms single-vector or pure BM25 search in technical domains.',
        'Streaming SSE UI creates an immediate perception of instant responsiveness.'
      ]
    }
  },
  {
    id: 'pulsemetrics',
    title: 'PulseMetrics Observability',
    subtitle: 'Privacy-preserving real-time developer analytics and performance monitoring',
    category: 'Cloud Architecture',
    featured: false,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    problem: 'Engineering teams needed GDPR-compliant web performance telemetry without cookies, ad-blocker dropouts, or third-party script bloat.',
    solution: 'Constructed an edge-ingested ClickHouse telemetry engine with lightweight (1.8kb) beacon scripts and interactive real-time dashboard.',
    impact: 'Handles 1.2 billion events monthly with 99.99% ingress uptime and 40ms dashboard aggregation queries across 100M+ rows.',
    metrics: [
      { label: 'Monthly Ingest', value: '1.2B events' },
      { label: 'Query Time', value: '38ms avg' },
      { label: 'Script Weight', value: '1.8 KB' }
    ],
    tags: ['ClickHouse', 'Go', 'Next.js', 'Docker', 'Kubernetes', 'AWS'],
    githubUrl: 'https://github.com/akipkirui/pulsemetrics-engine',
    caseStudy: {
      overview: 'A privacy-first analytics and performance observability suite purpose-built for high-volume modern applications.',
      architectureDiagram: {
        steps: [
          { title: 'Edge Ingress', description: 'Global Cloudflare Worker receiving beacon payloads and geo-hashing.', tech: 'Cloudflare / Edge' },
          { title: 'Buffering Queue', description: 'Kafka partition cluster decoupling ingestion from database batch writes.', tech: 'Apache Kafka' },
          { title: 'Columnar Store', description: 'ClickHouse cluster partitioned by date and tenant hash.', tech: 'ClickHouse DB' },
          { title: 'Analytics UI', description: 'Server-side rendered dashboards with live streaming widgets.', tech: 'React / Next.js' }
        ]
      },
      challenges: [
        {
          title: 'High Write Amplification on ClickHouse',
          resolution: 'Created an in-memory Go batch aggregator buffering 50,000 events or 1 second before executing bulk inserts.'
        },
        {
          title: 'Zero-PII Session Attribution',
          resolution: 'Constructed daily rotating HMAC salting based on IP and User-Agent, providing accurate daily uniques without tracking cookies.'
        }
      ],
      benchmarks: [
        { metric: 'Dashboard Load Time', before: '4.8s (Postgres)', after: '120ms (ClickHouse)' },
        { metric: 'Ingest Dropped Packets', before: '1.4%', after: '0.0001%' },
        { metric: 'Infrastructure Cost per Million Events', before: '$0.45', after: '$0.06' }
      ],
      codeSnippet: {
        filename: 'aggregator/batcher.go',
        language: 'go',
        code: `func (b *Batcher) FlushLoop(ctx context.Context) {
    ticker := time.NewTicker(1 * time.Second)
    defer ticker.Stop()
    for {
        select {
        case <-ctx.Done():
            b.flush()
            return
        case item := <-b.inbound:
            b.buffer = append(b.buffer, item)
            if len(b.buffer) >= b.maxBatchSize {
                b.flush()
            }
        case <-ticker.C:
            if len(b.buffer) > 0 {
                b.flush()
            }
        }
    }
}`
      },
      takeaways: [
        'Batching writes at the application layer is critical for columnar databases.',
        'Privacy-first architecture eliminates legal compliance overhead and user friction.'
      ]
    }
  },
  {
    id: 'vanguard-health',
    title: 'Vanguard Telehealth Platform',
    subtitle: 'HIPAA-compliant video consultation portal with real-time biometric telemetry',
    category: 'Full-Stack SaaS',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    problem: 'Healthcare network experienced call drops during remote rural patient consultations and lacked secure integration with electronic health records.',
    solution: 'Developed an adaptive bitrate WebRTC mesh with encrypted signaling, automated medical transcription, and seamless EHR sync.',
    impact: 'Powered 12,000+ clinical sessions with 99.4% connection success rate across low-bandwidth 3G/4G connections.',
    metrics: [
      { label: 'Clinical Sessions', value: '12,000+' },
      { label: 'Packet Recovery', value: '99.4%' },
      { label: 'EHR Sync Speed', value: '<500ms' }
    ],
    tags: ['WebRTC', 'Node.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    githubUrl: 'https://github.com/akipkirui/vanguard-health',
    caseStudy: {
      overview: 'A robust clinical telehealth consultation portal engineered for security, reliability in unstable network conditions, and instant provider adoption.',
      architectureDiagram: {
        steps: [
          { title: 'Signaling Server', description: 'End-to-end encrypted WebSocket signaling with JWT authorization.', tech: 'Node.js / ws' },
          { title: 'Selective Forwarding Unit', description: 'Adaptive bandwidth allocation and simulcast video routing.', tech: 'LiveKit / WebRTC' },
          { title: 'EHR Gateway', description: 'FHIR compliant REST & GraphQL API bridging clinical databases.', tech: 'PostgreSQL / FHIR' },
          { title: 'Doctor Console', description: 'Split-screen consultation console with real-time vitals plotting.', tech: 'React / Tailwind' }
        ]
      },
      challenges: [
        {
          title: 'High Packet Loss on Low-Bandwidth Rural Connections',
          resolution: 'Implemented simulcast video streaming with automatic fallback to high-quality Opus audio when packet loss exceeds 12%.'
        },
        {
          title: 'HIPAA Compliance & Audit Logging',
          resolution: 'Enforced envelope encryption with AWS KMS and immutable audit trails for every patient data query.'
        }
      ],
      benchmarks: [
        { metric: 'Call Dropped Rate', before: '11.8%', after: '0.6%' },
        { metric: 'Audio Latency', before: '420ms', after: '85ms' },
        { metric: 'Session Setup Time', before: '6.2s', after: '1.1s' }
      ],
      codeSnippet: {
        filename: 'webrtc/adaptive_controller.ts',
        language: 'typescript',
        code: `export class AdaptiveConnectionController {
  private peer: RTCPeerConnection;

  constructor(peer: RTCPeerConnection) {
    this.peer = peer;
    this.monitorNetworkStats();
  }

  private async monitorNetworkStats() {
    setInterval(async () => {
      const stats = await this.peer.getStats();
      stats.forEach(report => {
        if (report.type === 'inbound-rtp' && report.kind === 'video') {
          const packetLoss = report.packetsLost / (report.packetsReceived + report.packetsLost);
          if (packetLoss > 0.15) {
            this.downgradeBitrate();
          }
        }
      });
    }, 2000);
  }
}`
      },
      takeaways: [
        'Graceful degradation to crystal-clear audio preserves doctor-patient trust during severe network dips.',
        'Strict zero-trust architecture is mandatory for modern clinical platforms.'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core Systems',
    description: 'Type-safe, memory-conscious programming languages used for high-reliability backends and interfaces.',
    skills: [
      { name: 'TypeScript', level: 98, years: 7, highlight: 'Advanced type gymnastics, AST transformers, zero-any policy', featured: true },
      { name: 'Go (Golang)', level: 92, years: 5, highlight: 'Goroutine concurrency, microservice daemons, high-throughput I/O', featured: true },
      { name: 'JavaScript (ESNext)', level: 99, years: 8, highlight: 'V8 internals, event-loop optimization, modern web standards' },
      { name: 'Python', level: 88, years: 6, highlight: 'FastAPI, async asyncIO, ML data pipelines & embeddings' },
      { name: 'Rust', level: 78, years: 3, highlight: 'WebAssembly modules, memory-safe data parsers, FFI bindings' },
      { name: 'SQL', level: 94, years: 8, highlight: 'Complex indexing, EXPLAIN ANALYZE query tuning, partitioned tables', featured: true },
    ]
  },
  {
    title: 'Frontend & Interactive UX',
    description: 'Engineering responsive, fluid user interfaces with uncompromising design precision and 60fps performance.',
    skills: [
      { name: 'React 19 & Next.js', level: 96, years: 7, highlight: 'Server components, optimistic state, Suspense architectures', featured: true },
      { name: 'Tailwind CSS v4', level: 98, years: 5, highlight: 'Design system token architecture, modern layout engines' },
      { name: 'State Architecture', level: 95, years: 7, highlight: 'Zustand, TanStack Query, Redux Toolkit, reactive stores' },
      { name: 'Motion & Animations', level: 90, years: 4, highlight: 'Fluid spring physics, gestures, layout transitions' },
      { name: 'WebGL & Canvas', level: 82, years: 3, highlight: 'Three.js, high-density data visualization, Pixi.js' },
      { name: 'Web Accessibility (a11y)', level: 94, years: 6, highlight: 'WCAG AAA, WAI-ARIA authoring patterns, screen-reader validation' },
    ]
  },
  {
    title: 'Backend & Distributed Architecture',
    description: 'Fault-tolerant, horizontally scalable server systems engineered for sub-second global latency.',
    skills: [
      { name: 'PostgreSQL', level: 95, years: 8, highlight: 'High availability, JSONB querying, pgvector, custom extensions', featured: true },
      { name: 'Redis Streams & Cache', level: 94, years: 6, highlight: 'Sub-millisecond caching, rate-limiters, pub/sub fabrics', featured: true },
      { name: 'Apache Kafka & RabbitMQ', level: 86, years: 4, highlight: 'Event-driven architectures, dead-letter queues, idempotent consumers' },
      { name: 'Node.js & Express', level: 96, years: 8, highlight: 'Stream handling, memory profiling, clustered runtime services' },
      { name: 'gRPC & Protocol Buffers', level: 89, years: 4, highlight: 'Strict contracts, binary streaming, cross-language services' },
      { name: 'GraphQL & REST APIs', level: 94, years: 7, highlight: 'Schema stitching, DataLoader N+1 prevention, OpenAPI specs' },
    ]
  },
  {
    title: 'Cloud, DevOps & Observability',
    description: 'Infrastructure as Code and continuous deployment pipelines designed for zero-downtime releases.',
    skills: [
      { name: 'Docker & Containers', level: 95, years: 7, highlight: 'Multi-stage builds, non-root security profiles, layer caching', featured: true },
      { name: 'Kubernetes (K8s)', level: 84, years: 4, highlight: 'Ingress routing, HPA autoscaling, Helm charts, secret vault' },
      { name: 'AWS & Cloud Infrastructure', level: 90, years: 6, highlight: 'ECS, Lambda, S3, CloudFront, RDS, IAM least-privilege', featured: true },
      { name: 'CI/CD Automation', level: 92, years: 6, highlight: 'GitHub Actions, automated matrix testing, preview branch deployments' },
      { name: 'Terraform & IaC', level: 85, years: 4, highlight: 'Modular cloud provisioning, remote state locking, drift detection' },
      { name: 'Observability & Telemetry', level: 91, years: 5, highlight: 'Prometheus, Grafana, OpenTelemetry, Sentry, structured logging' },
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    period: '2023 — Present',
    role: 'Principal Software Consultant & Systems Architect',
    company: 'Independent Consulting',
    location: 'Remote / Global',
    type: 'Consulting & Advisory',
    description: 'Partnering with early-stage venture founders and growth-stage scaleups to design, architect, and deploy high-performance full-stack applications and cloud infrastructure.',
    achievements: [
      'Architected high-throughput ingestion pipelines handling >2M daily events with sub-20ms latency.',
      'Audited and refactored enterprise web frontends, driving Core Web Vitals to 99+ on mobile and desktop.',
      'Built custom internal developer platforms and design token pipelines that accelerated feature release velocity by 3.5x.'
    ],
    technologies: ['TypeScript', 'Go', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Redis']
  },
  {
    period: '2021 — 2023',
    role: 'Staff Software Engineer & Technical Lead',
    company: 'CloudScale Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Led a distributed engineering pod of 8 engineers building enterprise infrastructure automation and multi-tenant telemetry dashboards.',
    achievements: [
      'Spearheaded migration from legacy monolith to decoupled Go microservices, eliminating 4 hours of weekly downtime.',
      'Designed a distributed worker scheduling system handling 50k concurrent container deployments.',
      'Mentored 6 junior and mid-level engineers through technical design documents, RFC reviews, and pair programming.'
    ],
    technologies: ['Go', 'TypeScript', 'Kubernetes', 'gRPC', 'PostgreSQL', 'Terraform', 'Kafka']
  },
  {
    period: '2019 — 2021',
    role: 'Senior Full-Stack Engineer',
    company: 'FinTech Horizons',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Developed secure payment processing rails, automated compliance reporting, and customer-facing wealth management dashboards.',
    achievements: [
      'Built PCI-DSS compliant payment checkout flow supporting 14 African and international currency gateways.',
      'Optimized customer dashboard bundle size by 68%, cutting first contentful paint from 3.2s to 640ms.',
      'Automated integration testing suite with 92% code coverage, reducing production regression incidents to zero.'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Stripe API', 'Tailwind CSS']
  },
  {
    period: '2017 — 2019',
    role: 'Software Engineer',
    company: 'Apex Digital Labs',
    location: 'Nairobi',
    type: 'Full-time',
    description: 'Engineered web applications, RESTful microservices, and client portals for telecommunications and financial enterprise clients.',
    achievements: [
      'Developed real-time SMS and transactional notification gateway with fallback routing.',
      'Refactored legacy MySQL schemas to normalized PostgreSQL, improving heavy report query speeds by 400%.'
    ],
    technologies: ['JavaScript', 'Python', 'React', 'PostgreSQL', 'Linux', 'Git']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Amos transformed our product from a brittle prototype into an enterprise-grade platform capable of passing strict SOC2 and institutional vendor security audits. His technical rigor and sense of design craftsmanship are exceptionally rare.',
    author: 'David Chen',
    role: 'Chief Technology Officer',
    company: 'AetherData Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'Working with Amos felt like adding a full team of senior engineers. He grasped our complex domain immediately, delivered before deadlines, and wrote code so clean that our in-house team continues to praise it a year later.',
    author: 'Elena Rostova',
    role: 'VP of Product',
    company: 'PulseMetrics Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'The real-time orderbook interface Amos engineered for Apex Protocol is flawless. Traders repeatedly praise the responsiveness and zero-lag rendering. He is our first call for mission-critical frontend and backend architecture.',
    author: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'Apex Protocol',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const TERMINAL_FILES: Record<string, { filename: string; language: string; content: string }> = {
  'architecture.ts': {
    filename: 'architecture.ts',
    language: 'typescript',
    content: `/**
 * Core System Architecture Blueprint
 * Engineer: Amos Kipkirui <akipkirui2024@gmail.com>
 */

export interface SystemArchitecture {
  readonly environment: 'production';
  readonly reliabilitySLA: '99.98%';
  readonly telemetry: 'OpenTelemetry + Prometheus';
  readonly security: 'Zero-Trust + Mutual TLS';
}

export const productionTopology: SystemArchitecture = {
  environment: 'production',
  reliabilitySLA: '99.98%',
  telemetry: 'OpenTelemetry + Prometheus',
  security: 'Zero-Trust + Mutual TLS'
};

export async function bootstrapServiceCluster() {
  console.log("⚡ Bootstrapping edge proxy nodes...");
  console.log("🛡️ Initializing mutual TLS certificates...");
  console.log("🚀 Warming Redis cache partitions...");
  return { status: "HEALTHY", p99LatencyMs: 14.2 };
}`
  },
  'stack.config': {
    filename: 'stack.config',
    language: 'yaml',
    content: `# Amos Kipkirui Production Stack Specification
system:
  runtime: "Node.js 22 LTS / Go 1.23 / Rust"
  frontend:
    framework: "React 19 / Next.js"
    styling: "Tailwind CSS v4 + Motion"
    state: "Zustand / TanStack Query"
  backend:
    protocols: ["HTTP/2", "gRPC", "WebSockets"]
    databases: ["PostgreSQL 16", "Redis 7.2", "ClickHouse"]
    queues: ["Apache Kafka", "Redis Streams"]
  devops:
    containers: "Docker Multi-stage + Kubernetes"
    cloud: "AWS / Google Cloud Platform"
    ci_cd: "GitHub Actions Matrix Pipeline"`
  },
  'deploy.sh': {
    filename: 'deploy.sh',
    language: 'bash',
    content: `#!/usr/bin/env bash
set -euo pipefail

echo "=========================================="
echo "  Deploying Production Release: v2.4.0"
echo "  Engineer: Amos Kipkirui"
echo "=========================================="

echo "[1/4] Running typecheck & unit test matrix..."
tsc --noEmit && vitest run --coverage

echo "[2/4] Building production container images..."
docker build -t registry.internal/app:v2.4.0 --target runner .

echo "[3/4] Performing zero-downtime rolling update..."
kubectl rollout restart deployment/service-core

echo "[4/4] Verifying synthetic health endpoints..."
curl -fsSL https://api.internal/healthz/ready

echo "✅ Release v2.4.0 successfully deployed to production."`
  }
};

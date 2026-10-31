import React, { useState } from 'react';
import { Cpu, Server, Zap, DollarSign, Activity, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Sliders } from 'lucide-react';

interface ArchitectureSandboxProps {
  onOpenSchedule: () => void;
}

export const ArchitectureSandbox: React.FC<ArchitectureSandboxProps> = ({ onOpenSchedule }) => {
  const [pattern, setPattern] = useState<'modular-monolith' | 'event-microservices' | 'edge-serverless'>('event-microservices');
  const [trafficVolume, setTrafficVolume] = useState<number>(2); // 0: 50k, 1: 500k, 2: 5M, 3: 50M
  const [cachingLayer, setCachingLayer] = useState<'none' | 'redis-basic' | 'redis-distributed'>('redis-distributed');
  const [regionTopology, setRegionTopology] = useState<'single' | 'multi-active-passive' | 'global-edge'>('multi-active-passive');

  const trafficLabels = ['50k req/day', '500k req/day', '5M req/day', '50M req/day'];

  // Calculate dynamic metrics
  const calculateMetrics = () => {
    let baseLatency = 45; // ms
    let baseCost = 250; // USD / mo
    let slaScore = 99.9;
    let complexity = 'Moderate';

    // Pattern impact
    if (pattern === 'modular-monolith') {
      baseLatency += 30;
      baseCost *= 0.6;
      slaScore = 99.85;
      complexity = 'Low';
    } else if (pattern === 'event-microservices') {
      baseLatency -= 18;
      baseCost *= 1.3;
      slaScore = 99.98;
      complexity = 'High';
    } else if (pattern === 'edge-serverless') {
      baseLatency -= 24;
      baseCost *= 1.1;
      slaScore = 99.95;
      complexity = 'Moderate-High';
    }

    // Traffic volume impact
    const trafficMultiplier = [1, 2.5, 6, 18][trafficVolume];
    baseCost *= trafficMultiplier;
    if (trafficVolume === 3 && cachingLayer === 'none') {
      baseLatency += 120; // DB choked
    }

    // Caching impact
    if (cachingLayer === 'redis-basic') {
      baseLatency *= 0.65;
      baseCost += 90;
    } else if (cachingLayer === 'redis-distributed') {
      baseLatency *= 0.35;
      baseCost += 280;
    } else {
      baseLatency *= 1.8;
    }

    // Region topology
    if (regionTopology === 'multi-active-passive') {
      baseCost *= 1.6;
      slaScore = Math.max(slaScore, 99.99);
    } else if (regionTopology === 'global-edge') {
      baseLatency *= 0.5;
      baseCost *= 2.2;
      slaScore = 99.995;
      complexity = 'Very High';
    }

    return {
      p99Latency: Math.max(8, Math.round(baseLatency)),
      monthlyCost: Math.round(baseCost),
      sla: slaScore.toFixed(3) + '%',
      complexity,
    };
  };

  const metrics = calculateMetrics();

  return (
    <section id="architecture" className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-[#0F766E] text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-soft-level1">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0B1F3A] tracking-tight">
            System Topology & Trade-Off Simulator.
          </h2>
          <p className="mt-2 text-base text-[#44474D]">
            Engineering is the discipline of navigating trade-offs. Test how different architecture 
            decisions directly impact P99 latency, cloud spend, and operational complexity.
          </p>
        </div>

        {/* Sandbox Interactive Card */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-soft-level2 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left / Controls: System Parameters (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-7 border-b lg:border-b-0 lg:border-r border-[#E2E8F0]">
            
            {/* Control 1: Architecture Pattern */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                1. Architectural Pattern
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'modular-monolith', title: 'Modular Monolith', desc: 'Fastest MVP, single DB' },
                  { id: 'event-microservices', title: 'Event-Driven Mesh', desc: 'Go daemons, Kafka/Redis' },
                  { id: 'edge-serverless', title: 'Edge / Serverless', desc: 'Global compute nodes' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPattern(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      pattern === item.id
                        ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#0B1F3A] ring-2 ring-[#14B8A6]/20'
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#0B1F3A] mb-1">{item.title}</div>
                    <div className="text-[11px] text-[#64748B]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Traffic Scale */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A]">
                  2. Daily Ingress Volume
                </label>
                <span className="text-xs font-mono font-bold text-[#0F766E] px-2.5 py-0.5 rounded-full bg-[#14B8A6]/10">
                  {trafficLabels[trafficVolume]}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={trafficVolume}
                onChange={(e) => setTrafficVolume(Number(e.target.value))}
                className="w-full accent-[#14B8A6] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#94A3B8] mt-1">
                <span>50k (Early)</span>
                <span>500k (Growth)</span>
                <span>5M (Scale)</span>
                <span>50M (Enterprise)</span>
              </div>
            </div>

            {/* Control 3: Caching & Read Layer */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                3. Cache & Partition Layer
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'none', title: 'Direct DB Queries', desc: 'High DB load, zero cache' },
                  { id: 'redis-basic', title: 'Redis Read-Through', desc: 'Sub-5ms hot-path queries' },
                  { id: 'redis-distributed', title: 'Distributed Cluster', desc: 'Partitioned Redis mesh' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCachingLayer(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      cachingLayer === item.id
                        ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#0B1F3A] ring-2 ring-[#14B8A6]/20'
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#0B1F3A] mb-1">{item.title}</div>
                    <div className="text-[11px] text-[#64748B]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Multi-Region Topology */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                4. Availability & Regional Topology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'single', title: 'Single Region', desc: 'Lowest cost, single DC' },
                  { id: 'multi-active-passive', title: 'Active / Passive', desc: 'Automated failover DR' },
                  { id: 'global-edge', title: 'Active / Active Edge', desc: 'Worldwide low-latency' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRegionTopology(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      regionTopology === item.id
                        ? 'border-[#14B8A6] bg-[#14B8A6]/10 text-[#0B1F3A] ring-2 ring-[#14B8A6]/20'
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1] bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#0B1F3A] mb-1">{item.title}</div>
                    <div className="text-[11px] text-[#64748B]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right / Telemetry Outputs (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B1F3A] p-6 sm:p-8 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1E293B] mb-6">
                <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#14B8A6]" />
                  Simulated Architecture Telemetry
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  REAL-TIME EVAL
                </span>
              </div>

              {/* Numerical Metrics Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                
                {/* P99 Latency */}
                <div className="bg-[#071527] p-4 rounded-xl border border-[#1E3A8A]/40">
                  <div className="text-xs text-[#94A3B8] font-mono flex items-center gap-1 mb-1">
                    <Zap className="w-3.5 h-3.5 text-[#14B8A6]" />
                    P99 Latency
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    {metrics.p99Latency} <span className="text-xs font-mono text-[#94A3B8]">ms</span>
                  </div>
                  <div className="text-[11px] text-[#14B8A6] mt-1">
                    {metrics.p99Latency < 30 ? 'Ultra-responsive' : metrics.p99Latency < 80 ? 'Standard SLA' : 'High latency risk'}
                  </div>
                </div>

                {/* Cloud Cost */}
                <div className="bg-[#071527] p-4 rounded-xl border border-[#1E3A8A]/40">
                  <div className="text-xs text-[#94A3B8] font-mono flex items-center gap-1 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    Est. Cloud Spend
                  </div>
                  <div className="text-2xl font-display font-bold text-white">
                    ${metrics.monthlyCost.toLocaleString()} <span className="text-xs font-mono text-[#94A3B8]">/mo</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">
                    Infrastructure & egress
                  </div>
                </div>

                {/* SLA Reliability */}
                <div className="bg-[#071527] p-4 rounded-xl border border-[#1E3A8A]/40">
                  <div className="text-xs text-[#94A3B8] font-mono mb-1">
                    Availability SLA
                  </div>
                  <div className="text-xl font-display font-bold text-emerald-400">
                    {metrics.sla}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">
                    Annual downtime &lt; {trafficVolume > 1 ? '53 mins' : '8.7 hrs'}
                  </div>
                </div>

                {/* Operational Complexity */}
                <div className="bg-[#071527] p-4 rounded-xl border border-[#1E3A8A]/40">
                  <div className="text-xs text-[#94A3B8] font-mono mb-1">
                    DevOps Complexity
                  </div>
                  <div className="text-xl font-display font-bold text-amber-400">
                    {metrics.complexity}
                  </div>
                  <div className="text-[11px] text-[#94A3B8] mt-1">
                    Team maintenance overhead
                  </div>
                </div>

              </div>

              {/* Architect's Recommendation Box */}
              <div className="bg-[#071527] p-4 rounded-xl border border-[#1E293B] text-xs leading-relaxed text-[#CBD5E1]">
                <div className="text-[#14B8A6] font-mono font-bold mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Amos's Architectural Take:
                </div>
                <p>
                  {pattern === 'event-microservices' && cachingLayer !== 'none'
                    ? 'Recommended for high-growth SaaS. Decoupled Go daemons with Redis Streams guarantee resilience against traffic bursts while keeping compute lean.'
                    : pattern === 'modular-monolith'
                    ? 'Optimal for early-stage teams. Keeps deployment simple while preserving clean domain boundaries until team size or traffic demands separation.'
                    : 'Great for worldwide distributed users. Pairs well with lightweight edge functions, though careful attention to cold-starts and connection pools is required.'}
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-6 mt-6 border-t border-[#1E293B]">
              <button
                onClick={onOpenSchedule}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-[#14B8A6] hover:bg-[#2DD4BF] rounded-md transition-all cursor-pointer shadow-sm"
              >
                <span>Book System Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

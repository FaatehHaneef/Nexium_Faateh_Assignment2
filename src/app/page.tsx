'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/ui/input';
import { sampleBlogs } from '@/lib/sampleBlogs';
import { getWordCount, generateHashtags } from '@/lib/utils';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import type { Engine } from '@tsparticles/engine';
import SparkleParticles from '@/components/ui/particles';


export default function Home() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showUrdu, setShowUrdu] = useState(false);
  const [wordCount, setWordCount] = useState<number>(0);
  const [showWordCount, setShowWordCount] = useState(false);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [showHashtags, setShowHashtags] = useState(false);

  const particlesInit = async (main: Engine) => {
    await loadAll(main);
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSummary('');

    try {
      const res = await fetch('/api/summarise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, showUrdu }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setSummary(showUrdu ? data.summaryUr : data.summary);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleSampleClick = (index: number) => {
    const blog = sampleBlogs[index];
    setUrl('');
    setSummary(showUrdu ? blog.urduSummary : blog.summary);
    setError('');
  };

  useEffect(() => {
    if (summary) {
      const currentBlog = sampleBlogs.find(
        (blog) => blog.summary === summary || blog.urduSummary === summary
      );
      if (currentBlog) {
        setSummary(showUrdu ? currentBlog.urduSummary : currentBlog.summary);
      }
    }
  }, [showUrdu]);

  useEffect(() => {
    if (url && summary) {
      const fetchUpdatedSummary = async () => {
        try {
          const res = await fetch('/api/summarise', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, showUrdu }),
          });

          const data = await res.json();
          if (!res.ok) throw new Error(data.error || 'Something went wrong');

          setSummary(data.summary);
        } catch (err: any) {
          console.error('Error updating summary:', err.message);
        }
      };

      fetchUpdatedSummary();
    }
  }, [showUrdu]);

  useEffect(() => {
    if (summary) {
      setWordCount(getWordCount(summary));
    }
  }, [summary]);

  useEffect(() => {
    if (summary && showHashtags) {
      const tags = generateHashtags(summary);
      setHashtags(tags);
    }
  }, [summary, showHashtags]);

  const handleHashtagGeneration = () => {
    if (showHashtags) {
      setShowHashtags(false);
    } else {
      if (!summary) return;
      const tags = generateHashtags(summary);
      setHashtags(tags);
      setShowHashtags(true);
    }
  };

  return (
    
    <main className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800 text-white px-6 md:px-10 py-12 overflow-y-auto">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 75 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
            links: {
              enable: true,
              distance: 100,
              color: '#ffffff',
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 80 },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Main Container */}
      <div className="max-w-5xl w-full space-y-12 mx-auto relative z-10">
        {/* Header */}
        <div className="bg-pink-300/10 backdrop-blur-md border border-pink-200/30 rounded-lg shadow-lg p-8 md:p-10" >
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-center animate-pulse text-white">
            ✨ Blog Essence AI ✨
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 md:p-10"
        >
          <Input
            placeholder="Enter blog URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-pink-500 shadow-md"
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="submit"
              className="px-8 py-3 w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition rounded-lg text-white font-bold shadow-lg"
              disabled={loading}
            >
              {loading ? 'Crafting Your Insight...' : 'Unveil Summary'}
            </button>

            <button
              type="button"
              onClick={() => setShowUrdu(!showUrdu)}
              className={`px-8 py-3 w-full sm:w-auto rounded-lg transition text-white font-bold shadow-lg ${
                showUrdu
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
              }`}
            >
              {showUrdu ? 'Display in English' : 'اردو میں دیکھیں'}
            </button>
          </div>
        </form>

        {/* Sample Blogs */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-heading font-semibold mb-6 text-center">
            Curated Selections for Your Curiosity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sampleBlogs.map((blog, idx) => (
              <button
                key={idx}
                onClick={() => handleSampleClick(idx)}
                className="p-5 bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-700 hover:to-purple-600 rounded-lg shadow-lg text-white font-bold text-left"
              >
                {blog.title}
              </button>
            ))}
          </div>
        </div>

        {/* Summary Output */}
        {summary && (
          <>
            <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg p-8 md:p-10 shadow-lg">
              <h2 className="text-3xl font-heading font-bold mb-4">Essence Extracted:</h2>
              <p
                className={`${
                  showUrdu
                    ? 'font-urdu text-xl leading-loose tracking-wide'
                    : 'leading-relaxed'
                } whitespace-pre-line`}
              >
                {summary}
              </p>
            </div>

            {/* Buttons: Word Count + Hashtags */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowWordCount((prev) => !prev)}
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4 shadow-lg text-white font-semibold hover:bg-white/20 transition-all duration-300 text-center"
              >
                Word Count
              </button>
              <button
                onClick={handleHashtagGeneration}
                className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4 shadow-lg text-white font-semibold hover:bg-white/20 transition-all duration-300 text-center"
              >
                Generate Hashtags
              </button>
            </div>

            {/* Output Boxes */}
            {(showWordCount || showHashtags) && (
              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
                {showWordCount && (
                  <div className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-6 rounded-xl shadow-lg border border-white/30 animate-pulse flex flex-col justify-center items-center">
                  <div className="text-6xl font-extrabold text-white drop-shadow-md">{wordCount}</div>
                  <div className="text-xl font-semibold opacity-95 tracking-wider">Word Count</div>
                </div>                
                )}
                {showHashtags && (
                  <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 rounded-xl shadow-lg text-center border border-white/30 animate-pulse">
                    <h3 className="text-xl font-bold mb-3">Suggested Hashtags</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {hashtags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium shadow-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

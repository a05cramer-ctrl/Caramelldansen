import { useRef, useState } from 'react'
import './App.css'
import heroImage from './C8773F8E-21BA-4494-A293-763892FE0F68.png'
import caramelldansenSong from './Caramelldansen.mp3'

function Sparkles() {
  return (
    <div className="sparkles-container" aria-hidden>
      {[...Array(8)].map((_, i) => (
        <div key={i} className="sparkle" />
      ))}
    </div>
  )
}

function Equalizer() {
  return (
    <div className="equalizer" aria-hidden>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="equalizer-bar" />
      ))}
    </div>
  )
}

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleTheLoop = () => {
    if (!audioRef.current) {
      const audio = new Audio(caramelldansenSong)
      audio.loop = true

      const ctx = new AudioContext()
      const source = ctx.createMediaElementSource(audio)
      const gainNode = ctx.createGain()
      gainNode.gain.value = 3
      source.connect(gainNode)
      gainNode.connect(ctx.destination)

      audioRef.current = audio
      audioContextRef.current = ctx
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume()
      }
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <div className="bg-mesh" />
      <Sparkles />

      {/* Marquee - duplicated for seamless loop */}
      <div className="marquee-wrap flash-border">
        <div className="marquee-content">
          <span>✨ DANCE LOOP MOON ✨</span>
          <span>🪙 CARAMELLDANSEN 🪙</span>
          <span>✨ NON-STOP ENERGY ✨</span>
          <span>🪙 TO THE MOON 🪙</span>
          <span>✨ DANCE LOOP MOON ✨</span>
          <span>🪙 CARAMELLDANSEN 🪙</span>
          <span>✨ DANCE LOOP MOON ✨</span>
          <span>🪙 CARAMELLDANSEN 🪙</span>
          <span>✨ NON-STOP ENERGY ✨</span>
          <span>🪙 TO THE MOON 🪙</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src={heroImage} alt="Caramelldansen" className="hero-image" />
          <Equalizer />
          <h1 className="hero-headline">
            <span className="bounce-word">Dance.</span>{' '}
            <span className="bounce-word">Loop.</span>{' '}
            <span className="bounce-word">Moon.</span>
          </h1>
          <p className="hero-subheadline gradient-text">
            The fastest memecoin on the internet. Non-stop energy. Endlessly looping.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn cta-btn-primary" onClick={toggleTheLoop}>
              {isPlaying ? 'Stop the Loop' : 'Start the Loop'}
            </button>
            <button className="cta-btn cta-btn-secondary">Join the X page</button>
            <button className="cta-btn cta-btn-accent">COPY CA</button>
          </div>
        </div>
      </section>

      {/* Dance Phases - Roadmap */}
      <section className="dance-phases">
        <h2 className="section-title gradient-text">Dance Phases</h2>
        <p className="section-subtitle">The journey from first beat to moon landing.</p>
        <div className="phases-container">
          <div className="phase-item">
            <div className="phase-dot" />
            <h3>Phase 1: Warm Up</h3>
            <p>Launch, community building, first CEX listings. Getting the dancefloor packed.</p>
          </div>
          <div className="phase-item">
            <div className="phase-dot" />
            <h3>Phase 2: Drop the Beat</h3>
            <p>Major exchange listings, influencer partnerships, meme campaigns. The beat drops.</p>
          </div>
          <div className="phase-item">
            <div className="phase-dot" />
            <h3>Phase 3: Non-Stop</h3>
            <p>Merch drop, NFT collection, global dance challenge. 24/7 energy.</p>
          </div>
          <div className="phase-item">
            <div className="phase-dot" />
            <h3>Phase 4: Moon Walk</h3>
            <p>Top 10 memecoin. Michael Jackson would be proud. To the moon. 🚀</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/6-8E4Nirh9s"
            title="Caramelldansen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* LORE Section */}
      <section className="lore-section">
        <h2 className="section-title gradient-text">LORE</h2>
        <div className="lore-text">
          <p>Long before charts and candles, before pumps and dumps, there was only rhythm.</p>
          <p>In the early internet age, a melody escaped into the digital world — fast, bright, unstoppable. It looped endlessly, infecting forums, avatars, and profile pages. People didn't choose to dance.</p>
          <p><em>The dance chose them.</em></p>
          <p>They called it Caramelldansen.</p>
          <p>It started as a song, but it became something more — a ritual of joy, a symbol of infinite energy. When the beat drops, arms rise. When the loop restarts, momentum builds. It never truly ends.</p>
          <p>Legend says the Caramelldansen loop is powered by pure nostalgia and collective happiness. The more people dance, the stronger it becomes. Entire timelines have been consumed by its rhythm. Entire communities united by synchronized movement.</p>
          <p>Now, that same energy lives on-chain.</p>
          <p>Caramelldansen isn't just music.<br />It's velocity.<br />It's repetition.<br />It's momentum that never slows down.</p>
        </div>
      </section>

      {/* The Dancefloor - Community */}
      <section className="dancefloor">
        <h2 className="section-title gradient-text">The Dancefloor</h2>
        <p className="section-subtitle">Where the party never stops. Join the loop.</p>
        <div className="dancefloor-grid">
          <a href="#" className="dancefloor-card">
            <span className="dancefloor-icon">🐦</span>
            <h3>Twitter / X</h3>
            <p>Meme wars. Alpha drops. Vibes only.</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Caramelldansen — Dance. Loop. Moon. 🪙✨</p>
        <p className="footer-meme">This is not financial advice. This is a vibe.</p>
      </footer>
    </>
  )
}

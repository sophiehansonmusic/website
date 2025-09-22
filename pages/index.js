export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'#fff',fontFamily:'system-ui, Arial'}}>
      <header style={{position:'sticky',top:0,backdropFilter:'blur(6px)',borderBottom:'1px solid #222'}}>
        <div style={{maxWidth:960,margin:'0 auto',padding:'12px 16px',display:'flex',justifyContent:'space-between'}}>
          <a href="#" style={{fontWeight:600,textDecoration:'none',color:'#fff'}}>Sophie Hanson</a>
        </div>
      </header>

      <section style={{position:'relative',overflow:'hidden'}}>
        {/* HERO background */}
        <div style={{
          position:'absolute',inset:0,backgroundImage:"url('/hero.jpg')",
          backgroundSize:'cover',backgroundPosition:'center',opacity:0.9
        }} />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.4)'}} />

        <div style={{position:'relative',maxWidth:960,margin:'0 auto',padding:'80px 16px',display:'grid',gap:24,gridTemplateColumns:'1fr'}}>
          <div>
            <span style={{background:'#fff',color:'#111',padding:'6px 10px',borderRadius:999,fontSize:12,fontWeight:700,display:'inline-flex',alignItems:'center',gap:8}}>
              <span style={{width:8,height:8,borderRadius:999,background:'red',display:'inline-block',animation:'pulse 1.5s infinite'}}></span>
              Country Kinda Vibe — out everywhere
            </span>
            <div style={{marginTop:16,display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="https://open.spotify.com/artist/4dcMLQpee8aEJPBXOeHxjj?si=Fr1NjTV_SdefEEHSthPEnw" target="_blank" rel="noreferrer"
                 style={{background:'#fff',color:'#111',padding:'10px 16px',borderRadius:16,fontWeight:600,textDecoration:'none'}}>Listen on Spotify</a>
              <a href="https://www.youtube.com/watch?v=II-fo3f9i6M" target="_blank" rel="noreferrer"
                 style={{border:'1px solid #fff3',padding:'10px 16px',borderRadius:16,color:'#fff',textDecoration:'none'}}>Watch on YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`@keyframes pulse{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}`}</style>
    </div>
  );
}

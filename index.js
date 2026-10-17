<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>14! Uno'o | Portofolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap');

        :root {
            --neon-blue: #00f3ff;
            --neon-pink: #ff00ff;
            --neon-purple: #bd00ff;
            --neon-green: #00ff66;
            --dark-bg: #0a0a16;
            --text-color: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Rajdhani', sans-serif;
            scroll-behavior: smooth;
        }

        body {
            background: var(--dark-bg);
            color: var(--text-color);
            min-height: 100vh;
            overflow-x: hidden;
            background-image: radial-gradient(circle at 10% 20%, rgba(189, 0, 255, 0.1) 0%, transparent 20%),
                            radial-gradient(circle at 90% 70%, rgba(0, 243, 255, 0.1) 0%, transparent 20%),
                            linear-gradient(to bottom, #0a0a16, #000000);
            padding: 20px;
        }

        .cyberpunk-grid {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-image: linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
            z-index: -1;
            perspective: 500px;
        }

        .cyberpunk-elements {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .glowing-circle {
            position: absolute;
            width: 200px; height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--neon-purple), transparent);
            filter: blur(40px);
            opacity: 0.2;
            animation: float 15s infinite ease-in-out;
        }

        .circle-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .circle-2 {
            bottom: 30%; right: 15%;
            background: radial-gradient(circle, var(--neon-blue), transparent);
            animation-delay: -5s;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
        }

        /* --- HEADER PROFIL --- */
        .profile-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: center;
            animation: fadeInDown 1.2s ease-out;
            position: relative;
        }

        .profile-frame {
            width: 150px; height: 150px;
            border-radius: 50%;
            border: 3px solid var(--neon-blue);
            padding: 5px;
            box-shadow: 0 0 15px var(--neon-blue), inset 0 0 15px var(--neon-blue);
            animation: pulse 3s infinite alternate;
            overflow: hidden;
            position: relative;
            margin-bottom: 20px;
        }

        .logo-img {
            width: 100%; height: 100%;
            border-radius: 50%;
            object-fit: cover;
            background-color: #12121a;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            font-weight: 900;
            color: var(--neon-blue);
            font-family: 'Orbitron', sans-serif;
            text-shadow: 0 0 10px var(--neon-blue);
        }

        .profile-header h1 {
            font-family: 'Orbitron', sans-serif;
            font-size: 2.5rem;
            font-weight: 900;
            color: transparent;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-pink), var(--neon-purple));
            -webkit-background-clip: text;
            background-clip: text;
            text-shadow: 0 0 10px rgba(189, 0, 255, 0.5);
            animation: flicker 5s infinite alternate;
            letter-spacing: 2px;
            margin-bottom: 5px;
        }

        .profile-header h1:last-of-type {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .profile-header p.subtitle {
            font-size: 1.1rem;
            color: var(--neon-blue);
            letter-spacing: 1px;
            text-shadow: 0 0 5px var(--neon-blue);
            min-height: 1.5em;
        }

        /* --- EFEK MESIN KETIK --- */
        .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
            border-right: 2px solid var(--neon-blue);
            animation: blinkCursor 0.8s step-end infinite;
        }

        .typewriter.done {
            border-right: none;
            animation: none;
        }

        .typing-text {
            display: block;
            border-right: 2px solid var(--neon-blue);
            animation: blinkCursor 0.8s step-end infinite;
            min-height: 1.6em;
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
        }

        .typing-text.done {
            border-right: none;
            animation: none;
        }

        @keyframes blinkCursor {
            from, to { border-color: transparent; }
            50% { border-color: var(--neon-blue); }
        }

        /* --- NAVIGASI TOMBOL BULAT --- */
        .nav-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 30px 0 40px;
            width: 100%;
            animation: fadeInUp 1.2s ease-out;
        }

        .nav-btn {
            width: 90px; height: 90px;
            border-radius: 50%;
            border: 2px solid var(--neon-blue);
            background: rgba(0, 243, 255, 0.08);
            color: var(--text-color);
            cursor: pointer;
            font-family: 'Rajdhani', sans-serif;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4px;
            transition: all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 0 12px rgba(0, 243, 255, 0.3), inset 0 0 12px rgba(0, 243, 255, 0.1);
            backdrop-filter: blur(5px);
            position: relative;
            overflow: hidden;
            line-height: 1.1;
            text-align: center;
            padding: 5px;
        }

        .nav-btn i {
            font-size: 1.1rem;
            color: var(--neon-blue);
            transition: all 0.35s ease;
            text-shadow: 0 0 6px var(--neon-blue);
        }

        .nav-btn:hover {
            transform: translateY(-6px) scale(1.1);
            border-color: var(--neon-pink);
            box-shadow: 0 0 22px var(--neon-pink), inset 0 0 18px rgba(255, 0, 255, 0.2);
        }

        .nav-btn:hover i {
            color: var(--neon-pink);
            text-shadow: 0 0 12px var(--neon-pink);
            transform: scale(1.15);
        }

        .nav-btn.active {
            background: linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(189, 0, 255, 0.3));
            border-color: var(--neon-pink);
            box-shadow: 0 0 25px var(--neon-pink), inset 0 0 20px rgba(255, 0, 255, 0.35);
            transform: scale(1.08);
        }

        .nav-btn.active i {
            color: var(--neon-pink);
            text-shadow: 0 0 12px var(--neon-pink);
        }

        /* --- KOTAK HALAMAN --- */
        .page-content {
            width: 100%;
            max-width: 780px;
            aspect-ratio: 4 / 2.6;
            min-height: 480px;
            background: rgba(10, 10, 22, 0.88);
            border: 1px solid var(--neon-blue);
            border-radius: 14px;
            padding: 30px;
            margin-bottom: 80px;
            box-shadow: 0 0 25px rgba(0, 243, 255, 0.35), inset 0 0 30px rgba(0, 243, 255, 0.05);
            backdrop-filter: blur(6px);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .page-content::before,
        .page-content::after {
            content: '';
            position: absolute;
            width: 40px; height: 40px;
            border: 2px solid var(--neon-pink);
            pointer-events: none;
        }
        .page-content::before {
            top: 10px; left: 10px;
            border-right: none; border-bottom: none;
            border-radius: 8px 0 0 0;
            box-shadow: -2px -2px 10px rgba(255, 0, 255, 0.5);
        }
        .page-content::after {
            bottom: 10px; right: 10px;
            border-left: none; border-top: none;
            border-radius: 0 0 8px 0;
            box-shadow: 2px 2px 10px rgba(255, 0, 255, 0.5);
        }

        /* --- SISTEM ANIMASI HALAMAN --- */
        .page {
            display: none;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            padding-right: 8px;
            animation-fill-mode: both;
            animation-duration: 0.9s;
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .page::-webkit-scrollbar { width: 6px; }
        .page::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); border-radius: 10px; }
        .page::-webkit-scrollbar-thumb {
            background: linear-gradient(var(--neon-blue), var(--neon-purple));
            border-radius: 10px;
        }

        .page.active { display: block; }

        /* ANIMASI MASUK */
        .page.anim-fade-scale-in { animation-name: fadeScaleIn; }
        .page.anim-slide-right-in { animation-name: slideRightIn; }
        .page.anim-slide-left-in { animation-name: slideLeftIn; }
        .page.anim-slide-up-in { animation-name: slideUpIn; }
        .page.anim-blur-in { animation-name: blurIn; }
        .page.anim-rotate-in { animation-name: rotateIn; }
        .page.anim-flip-in { animation-name: flipIn; }

        /* ANIMASI KELUAR */
        .page.anim-slide-left-out { animation-name: slideLeftOut; animation-duration: 0.7s; }
        .page.anim-slide-right-out { animation-name: slideRightOut; animation-duration: 0.7s; }
        .page.anim-slide-up-out { animation-name: slideUpOut; animation-duration: 0.7s; }
        .page.anim-shrink-out { animation-name: shrinkOut; animation-duration: 0.7s; }
        .page.anim-blur-out { animation-name: blurOut; animation-duration: 0.7s; }
        .page.anim-rotate-out { animation-name: rotateOut; animation-duration: 0.7s; }

        /* KEYFRAMES MASUK */
        @keyframes fadeScaleIn {
            0%   { opacity: 0; transform: scale(0.92) translateY(15px); filter: blur(6px); }
            100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes slideRightIn {
            0%   { opacity: 0; transform: translateX(60px) scale(0.96); filter: blur(4px); }
            100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes slideLeftIn {
            0%   { opacity: 0; transform: translateX(-60px) scale(0.96); filter: blur(4px); }
            100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
        }
        @keyframes slideUpIn {
            0%   { opacity: 0; transform: translateY(60px) scale(0.96); filter: blur(4px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes blurIn {
            0%   { opacity: 0; transform: scale(1.08); filter: blur(12px); }
            100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes rotateIn {
            0%   { opacity: 0; transform: rotate(-6deg) scale(0.9); filter: blur(5px); }
            100% { opacity: 1; transform: rotate(0deg) scale(1); filter: blur(0); }
        }
        @keyframes flipIn {
            0%   { opacity: 0; transform: perspective(800px) rotateY(35deg) scale(0.9); filter: blur(4px); }
            100% { opacity: 1; transform: perspective(800px) rotateY(0) scale(1); filter: blur(0); }
        }

        /* KEYFRAMES KELUAR */
        @keyframes slideLeftOut {
            0%   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateX(-80px) scale(0.9); filter: blur(8px); }
        }
        @keyframes slideRightOut {
            0%   { opacity: 1; transform: translateX(0) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateX(80px) scale(0.9); filter: blur(8px); }
        }
        @keyframes slideUpOut {
            0%   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translateY(-80px) scale(0.9); filter: blur(8px); }
        }
        @keyframes shrinkOut {
            0%   { opacity: 1; transform: scale(1); filter: blur(0); }
            100% { opacity: 0; transform: scale(0.75); filter: blur(10px); }
        }
        @keyframes blurOut {
            0%   { opacity: 1; transform: scale(1); filter: blur(0); }
            100% { opacity: 0; transform: scale(1.1); filter: blur(14px); }
        }
        @keyframes rotateOut {
            0%   { opacity: 1; transform: rotate(0deg) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: rotate(8deg) scale(0.85); filter: blur(8px); }
        }

        /* --- KONTEN DALAM HALAMAN --- */
        .page h2 {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.8rem;
            color: var(--neon-green);
            margin-bottom: 20px;
            text-align: center;
            text-shadow: 0 0 10px var(--neon-green);
            position: relative;
            padding-bottom: 10px;
            min-height: 1.2em;
        }

        .page h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
        }

        .page p {
            line-height: 1.8;
            font-size: 1.1rem;
            color: #c0c0d0;
            margin-bottom: 15px;
        }

        .page ul {
            list-style: none;
            padding-left: 0;
        }

        .page ul li {
            padding: 8px 0;
            font-size: 1.1rem;
            color: #c0c0d0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            opacity: 0;
            transform: translateX(-15px);
        }

        .page ul li.show {
            animation: fadeInItem 0.6s ease-out forwards;
        }

        @keyframes fadeInItem {
            to { opacity: 1; transform: translateX(0); }
        }

        .page ul li::before {
            content: '▹';
            color: var(--neon-pink);
            margin-right: 10px;
            font-weight: bold;
        }

        /* PROJECT CARDS */
        .project-card {
            background: rgba(10, 10, 22, 0.8);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            padding: 18px;
            margin-bottom: 18px;
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            backdrop-filter: blur(5px);
            opacity: 0;
            transform: translateY(15px);
        }

        .project-card.show {
            animation: fadeInItem 0.7s ease-out forwards;
        }

        .project-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 0 25px rgba(0, 243, 255, 0.55);
        }

        .project-card h3 {
            font-family: 'Orbitron', sans-serif;
            color: var(--neon-pink);
            margin-bottom: 10px;
            font-size: 1.25rem;
            text-shadow: 0 0 5px var(--neon-pink);
        }

        .project-card .tech-tag {
            display: inline-block;
            background: rgba(189, 0, 255, 0.1);
            color: var(--neon-purple);
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            margin-right: 5px;
            margin-top: 10px;
            border: 1px solid rgba(189, 0, 255, 0.3);
            transition: all 0.3s ease;
        }

        .project-card .tech-tag:hover {
            background: rgba(189, 0, 255, 0.25);
            border-color: var(--neon-purple);
            box-shadow: 0 0 10px var(--neon-purple);
        }

        /* --- TOMBOL KONTAK MENGAMBANG --- */
        .contact-float {
            position: fixed;
            bottom: 30px; right: 30px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 999;
        }

        .contact-btn {
            width: 50px; height: 50px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
            text-decoration: none;
            font-size: 1.2rem;
            transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            background: rgba(10, 10, 22, 0.8);
        }

        .contact-btn:hover {
            transform: scale(1.2) translateY(-4px);
            box-shadow: 0 0 22px currentColor;
        }

        .contact-btn.github:hover { color: #fff; border-color: #fff; }
        .contact-btn.email:hover { color: #ea4335; border-color: #ea4335; }
        .contact-btn.whatsapp:hover { color: #25d366; border-color: #25d366; }
        .contact-btn.tiktok:hover { color: var(--neon-pink); border-color: var(--neon-pink); }

        /* --- ANIMASI UMUM --- */
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 15px var(--neon-blue), inset 0 0 15px var(--neon-blue); }
            100% { box-shadow: 0 0 25px var(--neon-pink), inset 0 0 25px var(--neon-pink); }
        }

        @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                text-shadow: 0 0 10px rgba(189, 0, 255, 0.5), 0 0 20px rgba(189, 0, 255, 0.3), 0 0 30px rgba(189, 0, 255, 0.2);
            }
            20%, 24%, 55% { text-shadow: none; }
        }

        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -20px) scale(1.2); }
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
            .profile-header h1 { font-size: 2rem; }
            .profile-header h1:last-of-type { font-size: 1.2rem; }
            .nav-btn { width: 75px; height: 75px; font-size: 0.65rem; }
            .nav-btn i { font-size: 0.9rem; }
            .page-content {
                aspect-ratio: auto;
                min-height: 420px;
                padding: 20px;
            }
            .contact-float { bottom: 20px; right: 20px; }
            .contact-btn { width: 45px; height: 45px; font-size: 1rem; }
            .profile-frame { width: 120px; height: 120px; }
            .page h2 { font-size: 1.5rem; }
            .page p, .page ul li { font-size: 1rem; }
        }

        @media (max-width: 480px) {
            .nav-btn { width: 65px; height: 65px; font-size: 0.6rem; }
            .nav-btn i { font-size: 0.8rem; }
            .nav-buttons { gap: 10px; }
        }
    </style>
</head>
<body>

    <div class="cyberpunk-grid"></div>
    <div class="cyberpunk-elements">
        <div class="glowing-circle circle-1"></div>
        <div class="glowing-circle circle-2"></div>
    </div>

    <div class="container">
        <!-- HEADER -->
        <header class="profile-header">
            <div class="profile-frame">
                <div class="logo-img">14!</div>
            </div>
            <h1>14! Uno'o</h1>
            <h1>MUHAMMAD RAFA PRATAMA</h1>
            <p class="subtitle" id="subtitleTyping"></p>
        </header>

        <!-- NAVIGASI HALAMAN -->
        <nav class="nav-buttons">
            <!-- ABOUT ME: pakai animasi SAMA seperti Teknologi (blur-in / rotate-out) -->
            <button class="nav-btn active" data-page="about" data-enter="anim-blur-in" data-exit="anim-rotate-out">
                <i class="fas fa-user-astronaut"></i>
                About Me
            </button>
            <button class="nav-btn" data-page="hobi" data-enter="anim-slide-right-in" data-exit="anim-shrink-out">
                <i class="fas fa-gamepad"></i>
                Hobi
            </button>
            <button class="nav-btn" data-page="skills" data-enter="anim-slide-up-in" data-exit="anim-slide-up-out">
                <i class="fas fa-code"></i>
                Skills
            </button>
            <button class="nav-btn" data-page="projects" data-enter="anim-flip-in" data-exit="anim-blur-out">
                <i class="fas fa-rocket"></i>
                Projects
            </button>
            <button class="nav-btn" data-page="teknologi" data-enter="anim-blur-in" data-exit="anim-rotate-out">
                <i class="fas fa-microchip"></i>
                Teknologi
            </button>
            <button class="nav-btn" data-page="experience" data-enter="anim-slide-left-in" data-exit="anim-slide-right-out">
                <i class="fas fa-briefcase"></i>
                Experience
            </button>
            <button class="nav-btn" data-page="education" data-enter="anim-rotate-in" data-exit="anim-blur-out">
                <i class="fas fa-graduation-cap"></i>
                Education
            </button>
        </nav>

        <!-- KONTEN HALAMAN -->
        <main class="page-content">
            
            <!-- HALAMAN ABOUT ME -->
            <div id="about" class="page active">
                <h2 class="typewriter" data-text="About Me"></h2>
                <p class="typing-text" data-text="Saya adalah seorang pelajar SMP dari Medan yang sedang belajar dan mengembangkan keterampilan di bidang pemrograman, pengembangan website, serta teknologi informasi. Saya memiliki rasa ingin tahu yang tinggi dan senang mempelajari hal-hal baru melalui proyek-proyek nyata yang saya kerjakan secara mandiri."></p>
                <p class="typing-text" data-text="Meskipun masih berada di tahap awal perjalanan sebagai developer, saya terus berusaha meningkatkan kemampuan dalam membuat website, memahami pemrograman, serta mempelajari dasar-dasar keamanan siber dan sistem komputer."></p>
                <p class="typing-text" data-text="Target Selanjutnya: Memperdalam JavaScript, Belajar Python lebih lanjut, Belajar Database, Cyber Security, Backend Development, dan membangun proyek yang lebih kompleks."></p>
            </div>

            <!-- HALAMAN HOBI -->
            <div id="hobi" class="page">
                <h2 class="typewriter" data-text="Hobi"></h2>
                <ul>
                    <li>Membaca manga</li>
                    <li>Menonton anime</li>
                    <li>Motoran</li>
                    <li>Membuat website dan sistem sederhana</li>
                    <li>Belajar pemrograman</li>
                    <li>Mempelajari jaringan komputer dan cyber security secara etis</li>
                    <li>Mengerjakan proyek teknologi untuk meningkatkan kemampuan</li>
                </ul>
            </div>

            <!-- HALAMAN SKILLS -->
            <div id="skills" class="page">
                <h2 class="typewriter" data-text="Skills"></h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Python (Beginner)</li>
                    <li>Git & GitHub</li>
                    <li>Responsive Web Design</li>
                    <li>Basic UI/UX Design</li>
                    <li>Problem Solving</li>
                    <li>Basic Networking</li>
                </ul>
            </div>

            <!-- HALAMAN PROJECTS -->
            <div id="projects" class="page">
                <h2 class="typewriter" data-text="Projects"></h2>
                
                <div class="project-card">
                    <h3>RAPZ STORE PAYMENT</h3>
                    <p>Website pembayaran digital dengan tampilan modern dan responsif.</p>
                    <p><strong>Fitur:</strong> Informasi pembayaran DANA, GoPay, QRIS Payment, Tombol media sosial, Desain cyberpunk.</p>
                    <div>
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Business Landing Page</h3>
                    <p>Landing page untuk promosi bisnis online.</p>
                    <p><strong>Fitur:</strong> Responsive Design, Contact Button, Product Showcase, Fast Loading.</p>
                    <div>
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Personal Portfolio Website</h3>
                    <p>Website portofolio pribadi untuk menampilkan proyek dan skill.</p>
                    <p><strong>Fitur:</strong> Profil Developer, Project Showcase, Contact Section, Mobile Friendly.</p>
                    <div>
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>

                <div class="project-card">
                    <h3>Cyber Security Learning Projects</h3>
                    <p>Proyek pembelajaran untuk memahami dasar keamanan siber dan jaringan komputer secara etis.</p>
                    <p><strong>Fokus Pembelajaran:</strong> Dasar jaringan komputer, Analisis keamanan website, Pengujian keamanan pada lingkungan latihan, Pemahaman kerentanan sistem, Automasi menggunakan script sederhana.</p>
                    <div>
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">Linux Tools</span>
                        <span class="tech-tag">Git</span>
                    </div>
                </div>
            </div>

            <!-- HALAMAN TEKNOLOGI -->
            <div id="teknologi" class="page">
                <h2 class="typewriter" data-text="Teknologi"></h2>
                <p class="typing-text" data-text="Berikut adalah teknologi yang saya gunakan dalam mengembangkan proyek-proyek saya:"></p>
                <ul>
                    <li>HTML5 & CSS3 (Frontend Dasar)</li>
                    <li>JavaScript (Interaktivitas Web)</li>
                    <li>Python (Automation & Scripting)</li>
                    <li>Git & GitHub (Version Control)</li>
                    <li>Linux (Dasar Sistem Operasi)</li>
                    <li>Responsive Web Design</li>
                </ul>
            </div>

            <!-- HALAMAN EXPERIENCE -->
            <div id="experience" class="page">
                <h2 class="typewriter" data-text="Experience"></h2>
                <ul>
                    <li>Belajar pengembangan website secara mandiri.</li>
                    <li>Membuat berbagai proyek website untuk latihan dan portofolio.</li>
                    <li>Menggunakan GitHub untuk menyimpan dan mengelola proyek.</li>
                    <li>Mempelajari dasar jaringan komputer dan cyber security.</li>
                    <li>Mengembangkan proyek pribadi untuk meningkatkan kemampuan pemrograman.</li>
                </ul>
            </div>

            <!-- HALAMAN EDUCATION -->
            <div id="education" class="page">
                <h2 class="typewriter" data-text="Education"></h2>
                <p class="typing-text" data-text="SMP (Sedang Berjalan)"></p>
                <p class="typing-text" data-text="Medan, Indonesia"></p>
                <br>
                <p class="typing-text" data-text='"Terus belajar dan berkembang untuk masa depan yang lebih baik."'></p>
            </div>

        </main>
    </div>

    <!-- TOMBOL KONTAK MENGAMBANG -->
    <div class="contact-float">
        <a href="https://github.com/rapz-cloud" target="_blank" class="contact-btn github" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="mailto:rtama5211@gmail.com" class="contact-btn email" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
        </a>
        <a href="https://wa.me/62895320214219" target="_blank" class="contact-btn whatsapp" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="https://www.tiktok.com/@style.fomo34" target="_blank" class="contact-btn tiktok" title="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
        </a>
    </div>

    <!-- SCRIPT -->
    <script>
        /* ============================================================
           1. EFEK MESIN KETIK (DIPERBAIKI)
           - Teks di HTML kosong, diisi dari data-text
           - Tidak ada typo / sisa teks
           ============================================================ */
        function typeWriter(el, text, speed, callback) {
            // Pastikan elemen kosong dulu
            el.textContent = '';
            el.classList.remove('done');
            el.style.borderRight = '2px solid var(--neon-blue)';
            el.style.animation = 'blinkCursor 0.8s step-end infinite';

            let i = 0;
            function type() {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    el.classList.add('done');
                    el.style.borderRight = 'none';
                    el.style.animation = 'none';
                    if (callback) callback();
                }
            }
            type();
        }

        /* Ketik semua elemen di dalam halaman aktif secara berurutan */
        function typeAllInPage(page) {
            const typeTargets = page.querySelectorAll('.typewriter, .typing-text');
            const items       = page.querySelectorAll('ul li');
            const cards       = page.querySelectorAll('.project-card');

            // Reset semua item & card (sembunyikan dulu)
            items.forEach(li => {
                li.classList.remove('show');
                li.style.opacity = '0';
                li.style.transform = 'translateX(-15px)';
            });
            cards.forEach(c => {
                c.classList.remove('show');
                c.style.opacity = '0';
                c.style.transform = 'translateY(15px)';
            });

            // Reset semua target ketik (kosongkan)
            typeTargets.forEach(el => {
                el.textContent = '';
                el.classList.remove('done');
            });

            // Ketik berurutan
            let idx = 0;
            function nextType() {
                if (idx >= typeTargets.length) {
                    // Setelah semua teks selesai, tampilkan items & cards
                    items.forEach((li, i) => {
                        setTimeout(() => li.classList.add('show'), i * 80);
                    });
                    cards.forEach((c, i) => {
                        setTimeout(() => c.classList.add('show'), 150 + i * 150);
                    });
                    return;
                }

                const el = typeTargets[idx];
                const text = el.getAttribute('data-text') || '';
                const isHeading = el.classList.contains('typewriter');
                const speed = isHeading ? 60 : 20;

                typeWriter(el, text, speed, () => {
                    idx++;
                    setTimeout(nextType, isHeading ? 250 : 120);
                });
            }
            nextType();
        }

        /* ============================================================
           2. NAVIGASI HALAMAN
           ============================================================ */
        let isAnimating = false;
        let currentPageId = 'about';

        function showPage(pageId, btnElement) {
            if (isAnimating || pageId === currentPageId) return;

            const enterAnim = btnElement.getAttribute('data-enter') || 'anim-fade-scale-in';
            const exitAnim  = btnElement.getAttribute('data-exit')  || 'anim-slide-left-out';

            const currentPage = document.getElementById(currentPageId);
            const nextPage    = document.getElementById(pageId);
            if (!nextPage) return;

            isAnimating = true;

            // Update tombol aktif
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');

            // --- Animasi keluar halaman lama ---
            if (currentPage) {
                currentPage.style.display = 'block';
                currentPage.className = 'page active';
                void currentPage.offsetWidth;
                currentPage.classList.add(exitAnim);

                const onExitEnd = () => {
                    currentPage.removeEventListener('animationend', onExitEnd);
                    currentPage.className = 'page';
                    currentPage.style.display = 'none';
                };
                currentPage.addEventListener('animationend', onExitEnd);
            }

            // --- Animasi masuk halaman baru ---
            setTimeout(() => {
                nextPage.className = 'page';
                nextPage.style.display = 'block';
                void nextPage.offsetWidth;
                nextPage.classList.add('active', enterAnim);

                const onEnterEnd = () => {
                    nextPage.removeEventListener('animationend', onEnterEnd);
                    nextPage.className = 'page active';
                    typeAllInPage(nextPage);
                };
                nextPage.addEventListener('animationend', onEnterEnd);

                // Fallback
                setTimeout(() => {
                    if (nextPage.classList.contains(enterAnim)) {
                        nextPage.className = 'page active';
                        typeAllInPage(nextPage);
                    }
                }, 1100);

                currentPageId = pageId;
                isAnimating = false;
            }, 180);

            document.querySelector('.page-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const pageId = this.getAttribute('data-page');
                showPage(pageId, this);
            });
        });

        /* ============================================================
           3. SUBTITLE HEADER DENGAN EFEK KETIK
           ============================================================ */
        window.addEventListener('load', () => {
            const subtitle = document.getElementById('subtitleTyping');
            // Ketik subtitle setelah sedikit delay
            setTimeout(() => {
                typeWriter(subtitle, 'Web Developer & Cyber Security Enthusiast', 55);
            }, 400);

            // Ketik halaman About Me pertama kali
            setTimeout(() => {
                const aboutPage = document.getElementById('about');
                if (aboutPage) typeAllInPage(aboutPage);
            }, 1200);
        });
    </script>

</body>
</html>

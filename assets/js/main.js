// Basic interactive behaviors extracted from previous index

document.addEventListener('DOMContentLoaded', function(){
    // Initialize lucide icons
    if (window.lucide) try { lucide.replace(); } catch(e){}

    // Mobile menu toggle
    window.toggleMobileMenu = function(){
        const menu = document.getElementById('mobile-menu');
        if(!menu) return;
        menu.classList.toggle('hidden');
    }

    // AI widget toggle
    window.toggleAI = function(){
        const ai = document.getElementById('aiChat');
        if(!ai) return;
        ai.classList.toggle('active');
    }

    window.sendMessage = function(){
        const input = document.getElementById('chatInput');
        const container = document.getElementById('chatMessages');
        if(!input || !container) return;
        const text = input.value.trim();
        if(!text) return;
        const msg = document.createElement('div');
        msg.className = 'message user';
        msg.textContent = text;
        container.appendChild(msg);
        input.value = '';
        container.scrollTop = container.scrollHeight;

        // simple echo response (placeholder)
        setTimeout(()=>{
            const bot = document.createElement('div');
            bot.className = 'message ai';
            bot.innerHTML = '<p>Thanks — we received your message. We will get back to you within 24 hours. For urgent inquiries call +92 321 411 4969.</p>';
            container.appendChild(bot);
            container.scrollTop = container.scrollHeight;
        }, 700);
    }

    window.quickReply = function(key){
        const input = document.getElementById('chatInput');
        if(!input) return;
        if(key==='quote') input.value = 'I would like a quote for a new project.';
        if(key==='roomhub') input.value = 'Tell me about Room Hub Pro.';
        if(key==='bitesync') input.value = 'Tell me about BiteSync.';
    }

    window.setLanguage = function(lang){
        const en = document.getElementById('langEn');
        const ur = document.getElementById('langUr');
        if(en) en.classList.toggle('active', lang==='en');
        if(ur) ur.classList.toggle('active', lang==='ur');
        // Placeholder: switch content or send signal to backend/localization system
    }

    window.initiateVoiceCall = function(){
        window.location.href = 'tel:+923214114969';
    }

    // simple scroll reveal using GSAP if available
    if(window.gsap && window.gsap.registerPlugin){
        try{
            gsap.registerPlugin(ScrollTrigger);
            gsap.utils.toArray('.reveal').forEach(function(elem){
                gsap.fromTo(elem, {opacity:0, y:30}, {opacity:1, y:0, duration:0.8, scrollTrigger:{trigger:elem, start:'top 80%'}});
            });
        }catch(e){/* fail silently */}
    }
});

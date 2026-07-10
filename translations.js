const translations = {
    pt: {
        'page-title': 'Gabriel Missima | Pesquisador em IA & Visão Computacional',
        'logo': 'Gabriel Missima',
        'nav-home': 'Início',
        'nav-about': 'Sobre Mim',
        'nav-education': 'Formação',
        'nav-publications': 'Publicações',
        'nav-projects': 'Projetos',
        'nav-setup': 'Setup',
        'nav-contact': 'Contato',
        'hero-greeting': 'Olá, eu sou o',
        'hero-title': 'Pesquisador em Inteligência Artificial & Visão Computacional',
        'hero-subtitle': '“A verdadeira arte é apenas um reflexo dos sentimentos de quem a contempla”',
        'hero-btn-projects': 'Ver Projetos',
        'about-title': 'Sobre Mim',
        'about-who-am-i': 'Quem sou eu?',
        'about-description': 'Sou pesquisador apaixonado por Inteligência Artificial e Visão Computacional. Bacharel em Ciência da Computação pelo Centro Universitário FEI, atualmente curso o Mestrado em Engenharia Elétrica com foco em Processamento de Sinais e Imagens, também na FEI. Minha pesquisa se concentra no uso de Deep Learning para análise de imagens médicas, com publicações em periódicos como IEEE Access e Springer Nature. Falo português e inglês, e sou atraído por design limpo e visualmente impactante.',
        'about-skills-title': 'Minhas Habilidades',
        'skill-1': 'Python & Machine Learning',
        'skill-2': 'Deep Learning (TensorFlow / PyTorch)',
        'skill-3': 'Visão Computacional & Processamento de Imagens',
        'skill-4': 'Pesquisa Científica & Escrita Acadêmica',
        'skill-5': 'C / C++ & Assembly',
        'skill-6': 'Data Science & Análise de Dados',
        'skill-more': 'E muito mais!',
        'download-cv': 'Baixar Currículo',
        'education-title': 'Formação',
        'edu-1-title': 'Mestrado em Engenharia Elétrica',
        'edu-1-date': '2025 – Presente',
        'edu-1-desc': 'Processamento de Sinais e Imagens — Centro Universitário FEI',
        'edu-2-title': 'Bacharelado em Ciência da Computação',
        'edu-2-date': '2021 – 2025',
        'edu-2-desc': 'Centro Universitário FEI — São Bernardo do Campo, SP',
        'publications-title': 'Publicações',
        'pub-type-journal': 'Periódico',
        'pub-type-conference': 'Congresso',
        'pub-4-title': 'Detecção automática de pedra no rim em tomografia computadorizada utilizando CNN',
        'pub-4-venue': 'XIV SICFEI, São Bernardo do Campo, 2024',
        'projects-title': 'Meus Projetos',
        'filter-all': 'Todos',
        'filter-research': 'Pesquisa',
        'filter-academic': 'Acadêmico',
        'project-1-title': 'DEMLP',
        'project-1-description': 'Pipeline de classificação binária de imagens médicas para detecção de cálculos renais usando a CNN customizada Conv4, validação cruzada 5-fold (estratificada por grupos via SSIM para evitar vazamento de dados), três estratégias de processamento de dados e interpretabilidade com mapas de ativação Grad-CAM.',
        'project-2-title': 'Amendoa\'s Dreams',
        'project-2-description': 'Diário digital de sonhos para registrar, visualizar, editar e excluir relatos de sonhos (título, humor, tags, horários e data). Construído com frontend em PHP que consome uma API REST em C# ASP.NET Core, utilizando PostgreSQL e Dapper para consultas SQL explícitas.',
        'project-3-title': 'TCC Fake DICOM',
        'project-3-description': 'Sistema de segurança para imagens médicas DICOM (Graduação na FEI). Avalia redes neurais profundas (ResNet50) para detectar alterações e injeções de ransomwares/malwares em arquivos de exames, comparando criptografia RSA em pixels ou espectros de Fourier com transformadas temporais.',
        'project-4-title': 'Projeto Banco',
        'project-4-description': 'Sistema bancário interativo "QuemPoupaTem" desenvolvido em Python para a matéria de Fundamentos de Algoritmos (Graduação na FEI). Suporta contas Salário, Comum e Plus com taxas e limites distintos, controle de transações e persistência de dados em arquivos txt.',
        'project-5-title': 'Fundamentos em C',
        'project-5-description': 'Exercícios práticos de programação desenvolvidos na disciplina de Desenvolvimento de Algoritmos (Graduação na FEI). Cobre lógica algorítmica fundamental, estruturas condicionais e de repetição, funções, arrays, ponteiros e alocação dinâmica de memória.',
        'project-6-title': 'Bússola Assembly',
        'project-6-description': 'Simulador de bússola eletrônica interativa escrito em Assembly 8051 (simulado no Edsim51) para a disciplina de Arquitetura de Computadores. Integra leitura de teclado matricial 4x3 para exibir países vizinhos e oceanos em um display LCD 16x2 com interrupções.',
        'project-7-title': 'Simulação de Robô',
        'project-7-description': 'Controle robótico de navegação autônoma desenvolvido em Python no simulador Webots para o robô e-puck (disciplina de IA e Robótica na FEI). O robô navega desviando de obstáculos até encontrar e sinalizar visualmente uma caixa de madeira com seus LEDs.',
        'project-8-title': 'Chatbot PIPE',
        'project-8-description': 'Assistente conversacional inteligente desenvolvido em Python para a disciplina de Inteligência Artificial e Robótica. Utiliza rede neural treinada para guiar pesquisadores e startups nas etapas de submissão de propostas tecnológicas do programa PIPE da FAPESP.',
        'project-9-title': 'PEL202 Projeto 1',
        'project-9-description': 'Resolução do problema de lógica clássico "Missionários e Canibais" em Python (Google Colab) para a matéria de Fundamentos de IA do Mestrado na FEI. Compara algoritmos e eficácia de buscas cegas (largura e profundidade) e buscas heurísticas.',
        'project-10-title': 'PEL202 Projeto 2',
        'project-10-description': 'Simulador gráfico interativo do Problema do Caixeiro Viajante (TSP) com interface Pygame para a disciplina de Fundamentos de IA do Mestrado na FEI. Permite implementar, parametrizar e comparar meta-heurísticas de Algoritmo Genético (GA) e Colônia de Formigas (ACO).',
        'project-11-title': 'PEL208 Tarefas',
        'project-11-description': 'Exercícios práticos para a disciplina de Tópicos Especiais em Aprendizagem no Mestrado. Apresenta implementações e análise de modelos de aprendizado estatístico como KNN, Mínimos Quadrados e Árvores de Decisão utilizando bases de dados reais do UCI ML Repository.',
        'project-12-title': 'PEL219 Tarefas',
        'project-12-description': 'Projetos de Redes Neurais e Aprendizado Profundo desenvolvidos no Mestrado. Inclui Perceptron, Backpropagation implementado do zero para redes MLP (sem bibliotecas), análises de modelos no dataset MNIST e aprendizado Greedy Layer-Wise.',
        'tag-cryptography': 'Criptografia',
        'tag-basic': 'Básico',
        'tag-low-level': 'Baixo Nível',
        'tag-embedded': 'Embarcados',
        'tag-academic': 'Acadêmico',
        'tag-robotics': 'Robótica',
        'tag-simulation': 'Simulação',
        'status-in-progress': '<i class="fas fa-spinner fa-spin"></i> Em andamento',

        'more-projects': 'Ver mais no GitHub',
        'more-projects-linkedin': 'Ver no LinkedIn',
        'setup-title': 'Meu Setup',
        'setup-machine': 'Máquina',
        'setup-machine-desc': 'Desktop',
        'setup-cpu': 'Processador (CPU)',
        'setup-cpu-desc': 'AMD Ryzen 5 5500<br>6 núcleos / 12 threads<br>Clock base: 3.60 GHz',
        'setup-gpu': 'Placa de Vídeo (GPU)',
        'setup-gpu-desc': 'NVIDIA GeForce RTX 3060<br>12 GB VRAM dedicada<br>8 GB memória compartilhada',
        'setup-ram': 'Memória RAM',
        'setup-ram-desc': '16 GB RAM (2x8 GB)',
        'setup-os': 'Sistemas Operacionais (Dualboot)',
        'setup-os-desc': 'Windows 11 Pro<br>Linux: Pop!_OS',
        'setup-storage': 'Armazenamento',
        'setup-storage-desc': 'SSD SATA 1 TB (Windows 11 Pro)<br>SSD NVMe M.2 1 TB (Pop!_OS)<br>HD 1 TB (armazenamento auxiliar)',
        'contact-title': 'Entre em Contato',
        'contact-email': 'Email',
        'contact-location': 'Localização',
        'contact-location-text': 'São Paulo, Brasil',
        'form-name': 'Seu Nome',
        'form-email': 'Seu Email',
        'form-subject': 'Assunto',
        'form-message': 'Sua Mensagem',
        'form-submit': 'Enviar Mensagem',
        'footer-copyright': '© 2026 Gabriel Missima. Todos os direitos reservados.',
        // Arquivo do currículo
        'cv-file': 'Gabriel_Missima_CV_PT.pdf'
    },
    en: {
        'page-title': 'Gabriel Missima | AI & Computer Vision Researcher',
        'logo': 'Gabriel Missima',
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-education': 'Education',
        'nav-publications': 'Publications',
        'nav-projects': 'Projects',
        'nav-setup': 'Setup',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I am',
        'hero-title': 'AI & Computer Vision Researcher',
        'hero-subtitle': '“True art is merely a reflection of the feelings of those who behold it”',
        'hero-btn-projects': 'View Projects',
        'about-title': 'About Me',
        'about-who-am-i': 'Who am I?',
        'about-description': 'I\'m a researcher passionate about Artificial Intelligence and Computer Vision. I hold a Bachelor\'s degree in Computer Science from Centro Universitário FEI, and I\'m currently pursuing a Master\'s degree in Electrical Engineering with a focus on Signal and Image Processing, also at FEI. My research focuses on Deep Learning for medical image analysis, with publications in journals such as IEEE Access and Springer Nature. I speak Portuguese and English, and I\'m drawn to clean and visually impactful design.',
        'about-skills-title': 'My Skills',
        'skill-1': 'Python & Machine Learning',
        'skill-2': 'Deep Learning (TensorFlow / PyTorch)',
        'skill-3': 'Computer Vision & Image Processing',
        'skill-4': 'Scientific Research & Academic Writing',
        'skill-5': 'C / C++ & Assembly',
        'skill-6': 'Data Science & Data Analysis',
        'skill-more': 'And much more!',
        'download-cv': 'Download CV',
        'education-title': 'Education',
        'edu-1-title': 'M.Sc. in Electrical Engineering',
        'edu-1-date': '2025 – Present',
        'edu-1-desc': 'Signal and Image Processing — Centro Universitário FEI',
        'edu-2-title': 'B.Sc. in Computer Science',
        'edu-2-date': '2021 – 2025',
        'edu-2-desc': 'Centro Universitário FEI — São Bernardo do Campo, SP, Brazil',
        'publications-title': 'Publications',
        'pub-type-journal': 'Journal',
        'pub-type-conference': 'Conference',
        'pub-4-title': 'Automatic kidney stone detection in computed tomography using CNN',
        'pub-4-venue': 'XIV SICFEI, São Bernardo do Campo, 2024',
        'projects-title': 'My Projects',
        'filter-all': 'All',
        'filter-research': 'Research',
        'filter-academic': 'Academic',
        'project-1-title': 'DEMLP',
        'project-1-description': 'A deep learning binary classification pipeline for kidney stone detection using a custom Conv4 CNN, 5-fold cross-validation stratified by patient groups (using SSIM to prevent data leakage), three data balance strategies, and model interpretability with Grad-CAM activation maps.',
        'project-2-title': 'Amendoa\'s Dreams',
        'project-2-description': 'A digital dream journal web app built to record, list, view, edit, and delete dream reports (including title, humor, tags, timestamps, and date). Features a decoupled PHP frontend consuming a C# ASP.NET Core REST API, using PostgreSQL and Dapper for clear SQL queries.',
        'project-3-title': 'TCC Fake DICOM',
        'project-3-description': 'Security framework for DICOM medical images developed as an undergraduate thesis (TCC at FEI). Evaluates deep neural networks (ResNet50) to detect malicious tampering (ransomware/malware) in DICOM files, comparing RSA cryptography applied to raw pixels or Fourier spectra with temporal transforms.',
        'project-4-title': 'Projeto Banco',
        'project-4-description': 'Interactive "QuemPoupaTem" banking system developed in Python for the Fundamentals of Algorithms course (FEI). Supports Salary, Common, and Plus accounts with different fee structures, featuring debiting/depositing, transaction logs, and txt file persistence.',
        'project-5-title': 'C Fundamentals',
        'project-5-description': 'A comprehensive collection of C programs developed over 7 weeks for the Algorithm Development course (FEI). Covers basic I/O, conditional logic, loops, mathematical functions, arrays, matrices, sorting, pointers, and dynamic memory allocation.',
        'project-6-title': 'Assembly Compass',
        'project-6-description': 'An interactive digital compass simulation written in Assembly for the 8051 microcontroller (Edsim51) for the Computer Architecture course. Mapped a 4x3 matrix keyboard to read inputs and display adjacent countries or oceans on a 16x2 LCD using external interrupts.',
        'project-7-title': 'Robot Simulation',
        'project-7-description': 'Autonomous robotic control program developed in Python on Webots simulator for the e-puck robot (AI & Robotics course at FEI). Features autonomous navigation and obstacle avoidance to locate a specific lightweight wooden box, halt, and trigger the robot\'s LEDs.',
        'project-8-title': 'Chatbot PIPE',
        'project-8-description': 'A conversational AI chatbot developed in Python for the AI & Robotics course at FEI. Uses a custom neural network trained on a QA dataset to assist researchers and technology startups through the process of submitting proposals to FAPESP\'s PIPE program.',
        'project-9-title': 'PEL202 Project 1',
        'project-9-description': 'Resolution of the classic "Missionaries and Cannibals" puzzle in Python (Google Colab) for the Master\'s Fundamentals of AI course at FEI. Focuses on implementing and comparing blind searches (BFS, DFS) and heuristic-based search strategies.',
        'project-10-title': 'PEL202 Project 2',
        'project-10-description': 'An interactive graphic simulator for the Traveling Salesperson Problem (TSP) built in Python using Pygame for the Master\'s Fundamentals of AI course at FEI. Allows users to implement, test, and compare Genetic Algorithms (GA) and Ant Colony Optimization (ACO) in real-time.',
        'project-11-title': 'PEL208 Tasks',
        'project-11-description': 'Practical tasks for the Special Topics in Learning Master\'s course at FEI. Features Google Colab implementations of statistical learning algorithms, including KNN, Least Squares, and Decision Trees applied to real-world datasets from the UCI ML Repository.',
        'project-12-title': 'PEL219 Tasks',
        'project-12-description': 'Deep learning assignments for the Master\'s Artificial Neural Networks course at FEI. Includes Perceptron, Backpropagation from scratch for MLP networks (without external libraries), experimenting with model architectures on MNIST, and Greedy Layer-Wise learning.',
        'tag-cryptography': 'Cryptography',
        'tag-basic': 'Basic',
        'tag-low-level': 'Low Level',
        'tag-embedded': 'Embedded',
        'tag-academic': 'Academic',
        'tag-robotics': 'Robotics',
        'tag-simulation': 'Simulation',
        'status-in-progress': '<i class="fas fa-spinner fa-spin"></i> In progress',
        'more-projects': 'View more on GitHub',
        'more-projects-linkedin': 'View on LinkedIn',
        'setup-title': 'My Setup',
        'setup-machine': 'Machine',
        'setup-machine-desc': 'Desktop',
        'setup-cpu': 'Processor (CPU)',
        'setup-cpu-desc': 'AMD Ryzen 5 5500<br>6 cores / 12 threads<br>Base clock: 3.60 GHz',
        'setup-gpu': 'Graphics Card (GPU)',
        'setup-gpu-desc': 'NVIDIA GeForce RTX 3060<br>12 GB dedicated VRAM<br>8 GB shared memory',
        'setup-ram': 'RAM Memory',
        'setup-ram-desc': '16 GB RAM (2x8 GB)',
        'setup-os': 'Operating Systems (Dualboot)',
        'setup-os-desc': 'Windows 11 Pro<br>Linux: Pop!_OS',
        'setup-storage': 'Storage',
        'setup-storage-desc': '1 TB SATA SSD (Windows 11 Pro)<br>1 TB NVMe M.2 SSD (Pop!_OS)<br>1 TB HDD (auxiliary storage)',
        'contact-title': 'Get In Touch',
        'contact-email': 'Email',
        'contact-location': 'Location',
        'contact-location-text': 'São Paulo, Brazil',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'footer-copyright': '© 2026 Gabriel Missima. All rights reserved.',
        // CV file
        'cv-file': 'Gabriel_Missima_CV_EN.pdf'
    }
};

// Função para trocar idioma
function switchLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Se for o botão de download CV, preservar o ícone
            if (key === 'download-cv') {
                const icon = element.querySelector('i');
                element.textContent = translations[lang][key];
                if (icon) {
                    element.prepend(icon);
                } else {
                    element.innerHTML = '<i class="fas fa-download"></i> ' + translations[lang][key];
                }
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Atualizar placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Atualizar link do currículo
    const cvButton = document.getElementById('download-cv');
    if (cvButton && translations[lang]['cv-file']) {
        cvButton.setAttribute('href', translations[lang]['cv-file']);
        cvButton.setAttribute('download', translations[lang]['cv-file']);
    }

    // Atualizar title da página
    const titleElement = document.querySelector('title');
    if (titleElement && translations[lang]['page-title']) {
        titleElement.textContent = translations[lang]['page-title'];
    }

    // Atualizar atributo lang do HTML
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';

    // Salvar preferência no localStorage
    localStorage.setItem('preferred-language', lang);
}

// Carregar idioma salvo ou padrão
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language') || 'pt';
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLang;
        switchLanguage(savedLang);
    }
}

// Event listener para mudança de idioma
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function () {
            switchLanguage(this.value);
        });
    }

    loadSavedLanguage();
});
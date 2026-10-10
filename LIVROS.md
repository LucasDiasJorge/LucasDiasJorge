# Bibliografia para Programadores Avançados

Uma seleção extensa para quem já programa profissionalmente e quer aprofundar fundamentos, arquitetura, sistemas, linguagens e áreas especializadas. A lista combina livros práticos de engenharia com textos acadêmicos e referências de nível de pós-graduação.

Os títulos foram mantidos no idioma original para facilitar a busca. Muitos estão em inglês; em assuntos que evoluem rapidamente, use os livros para construir fundamentos e consulte também a documentação atual das ferramentas e plataformas.

## Engenharia de software, design e arquitetura

- **A Philosophy of Software Design** — John Ousterhout. Complexidade, modularidade, abstrações e projeto de interfaces.
- **Software Engineering at Google** — Titus Winters, Tom Manshreck e Hyrum Wright. Engenharia em larga escala, manutencao, testes e cultura técnica.
- **Object-Oriented Software Construction** — Bertrand Meyer. Tipagem, contratos, modularidade e projeto orientado a objetos em profundidade.
- **Design Patterns: Elements of Reusable Object-Oriented Software** — Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides. Catalogo classico de padrões de projeto e suas consequencias.
- **Domain-Driven Design: Tackling Complexity in the Heart of Software** — Eric Evans. Modelagem de domínios complexos e linguagem ubíqua.
- **Implementing Domain-Driven Design** — Vaughn Vernon. Aplicação pratica de DDD, agregados, contextos delimitados e eventos.
- **Patterns of Enterprise Application Architecture** — Martin Fowler. Padrões para organizar aplicações corporativas e suas camadas.
- **Fundamentals of Software Architecture** — Mark Richards e Neal Ford. Estilos arquiteturais, atributos de qualidade e decisões de arquitetura.
- **Software Architecture: The Hard Parts** — Neal Ford, Mark Richards, Pramod Sadalage e Zhamak Dehghani. Trade-offs e decisões difíceis em arquiteturas distribuidas.
- **Building Evolutionary Architectures** — Neal Ford, Rebecca Parsons e Patrick Kua. Arquiteturas que podem evoluir com verificações automatizadas.
- **Refactoring: Improving the Design of Existing Code** — Martin Fowler. Transformações pequenas e seguras para melhorar código existente.
- **Working Effectively with Legacy Code** — Michael Feathers. Técnicas para compreender, testar e alterar sistemas sem cobertura adequada.
- **Release It!: Design and Deploy Production-Ready Software** — Michael T. Nygard. Resiliência, falhas em produção e estabilidade operacional.
- **Continuous Delivery** — Jez Humble e David Farley. Automação de build, testes e liberacao confiável de software.
- **Team Topologies** — Matthew Skelton e Manuel Pais. Como estruturar times e fluxos de trabalho para reduzir atrito arquitetural.

## Sistemas distribuídos, mensageria e confiabilidade

- **Designing Data-Intensive Applications** — Martin Kleppmann. Consistência, replicação, particionamento, transações e processamento de dados.
- **Distributed Systems** — Maarten van Steen e Andrew S. Tanenbaum. Fundamentos de modelos, coordenação, comunicação e tolerância a falhas.
- **Distributed Algorithms** — Nancy A. Lynch. Tratamento formal de algoritmos distribuídos e suas garantias.
- **Introduction to Reliable and Secure Distributed Programming** — Christian Cachin, Rachid Guerraoui e Luís Rodrigues. Protocolos, consenso, segurança e tolerância a falhas.
- **Understanding Distributed Systems** — Roberto Vitillo. Modelos mentais para construir e operar sistemas distribuídos.
- **Designing Distributed Systems** — Brendan Burns. Padrões de arquitetura para servicos escaláveis e confiáveis.
- **Building Microservices** — Sam Newman. Fronteiras de servicos, comunicação e operação de microservicos.
- **Monolith to Microservices** — Sam Newman. Estrategias incrementais para decompor sistemas existentes.
- **Enterprise Integration Patterns** — Gregor Hohpe e Bobby Woolf. Padrões de integração, roteamento e mensageria.
- **Designing Event-Driven Systems** — Ben Stopford. Arquitetura orientada a eventos e processamento de streams com Kafka.
- **Kafka: The Definitive Guide** — Gwen Shapira, Todd Palino, Rajini Sivaram e Krit Petty. Arquitetura, operação e desenvolvimento com Apache Kafka.
- **Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing** — Tyler Akidau, Slava Chernyak e Reuven Lax. Semântica e projeto de processamento de streams.
- **Site Reliability Engineering** — Betsy Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy. Principios de confiabilidade e operação de sistemas em escala.
- **The Site Reliability Workbook** — Betsy Beyer e colaboradores. Práticas e estudos de caso para aplicar SRE.
- **Database Reliability Engineering** — Laine Campbell e Charity Majors. Operação, confiabilidade e observabilidade de bancos de dados.
- **Observability Engineering** — Charity Majors, Liz Fong-Jones e George Miranda. Instrumentacao e diagnóstico de sistemas em produção.
- **Chaos Engineering: System Resiliency in Practice** — Casey Rosenthal e Nora Jones. Experimentos controlados para validar resiliência.
- **Distributed Systems Observability** — Cindy Sridharan. Telemetria, diagnóstico e operação de sistemas distribuídos.

## Bancos de dados, armazenamento e engenharia de dados

- **Database Internals** — Alex Petrov. Estruturas de armazenamento, indexacao, log e arquitetura de bancos distribuídos.
- **Transaction Processing: Concepts and Techniques** — Jim Gray e Andreas Reuter. Transações, recuperação, concorrencia e processamento confiável.
- **Readings in Database Systems** — editado por Joseph M. Hellerstein e Michael Stonebraker. Coletânea de artigos fundamentais, conhecida como *The Red Book*.
- **Foundations of Databases** — Serge Abiteboul, Richard Hull e Victor Vianu. Fundamentos formais de consultas, dependencias e bancos relacionais.
- **Principles of Database and Knowledge-Base Systems, Volumes I and II** — Jeffrey D. Ullman. Tratamento teórico de bancos de dados e bases de conhecimento.
- **Principles of Distributed Database Systems** — M. Tamer Özsu e Patrick Valduriez. Replicação, distribuição, consultas e transações em bancos distribuídos.
- **Database Design and Relational Theory** — C. J. Date. Modelo relacional, teoria e projeto rigoroso de esquemas.
- **SQL Performance Explained** — Markus Winand. Índices, planos de execução e otimização de consultas SQL.
- **High Performance MySQL** — Silvia Botros e Jeremy Tinley. Diagnóstico, configuração e otimização de MySQL.
- **The Art of PostgreSQL** — Dimitri Fontaine. Consultas, modelagem e recursos avançados do PostgreSQL.
- **PostgreSQL 14 Internals** — Egor Rogov. Internals de uma versão específica do PostgreSQL; complemente com a documentação da versão que voce usa.
- **The Data Warehouse Toolkit** — Ralph Kimball e Margy Ross. Modelagem dimensional e arquitetura de data warehouses.
- **Fundamentals of Data Engineering** — Joe Reis e Matt Housley. Ciclo de vida, plataformas e operação de pipelines de dados.
- **Data-Intensive Text Processing with MapReduce** — Jimmy Lin e Chris Dyer. Algoritmos e técnicas de processamento de grandes colecoes de texto.
- **Graph Databases** — Ian Robinson, Jim Webber e Emil Eifrem. Modelagem, consultas e aplicações de bancos orientados a grafos.

## Algoritmos, estruturas de dados e teoria da computacao

- **Introduction to Algorithms** — Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein. Referência abrangente de algoritmos e análise.
- **The Art of Computer Programming** — Donald E. Knuth. Tratamento matemático e profundo de algoritmos, combinatória e computacao.
- **Algorithm Design** — Jon Kleinberg e Éva Tardos. Projeto de algoritmos, provas de corretude e análise de complexidade.
- **The Algorithm Design Manual** — Steven S. Skiena. Técnicas de projeto e guia pratico para problemas algorítmicos.
- **Concrete Mathematics** — Ronald L. Graham, Donald E. Knuth e Oren Patashnik. Ferramentas matemáticas para análise de algoritmos.
- **Randomized Algorithms** — Rajeev Motwani e Prabhakar Raghavan. Algoritmos probabilísticos e análise de desempenho esperado.
- **Approximation Algorithms** — Vijay V. Vazirani. Algoritmos de aproximação e garantias para problemas difíceis.
- **The Design of Approximation Algorithms** — David P. Williamson e David B. Shmoys. Técnicas avancadas para problemas de otimização combinatória.
- **Computational Complexity: A Modern Approach** — Sanjeev Arora e Boaz Barak. Complexidade computacional, reduções e classes de problemas.
- **Introduction to the Theory of Computation** — Michael Sipser. Linguagens formais, computabilidade e complexidade.
- **Algorithms on Strings, Trees, and Sequences** — Dan Gusfield. Algoritmos para texto, bioinformática e estruturas de sequencias.
- **Network Flows: Theory, Algorithms, and Applications** — Ravindra K. Ahuja, Thomas L. Magnanti e James B. Orlin. Fluxos em redes e otimização combinatória.
- **Combinatorial Optimization: Algorithms and Complexity** — Christos H. Papadimitriou e Kenneth Steiglitz. Modelagem e algoritmos para problemas combinatorios.
- **Advanced Data Structures** — Peter Brass. Estruturas avancadas e análise de operacoes.
- **Graph Theory** — Reinhard Diestel. Teoria de grafos, conectividade, minorantes e coloracao.
- **Data Structures and Network Algorithms** — Robert E. Tarjan. Estruturas de dados e aplicações em algoritmos de redes.
- **Algorithmic Game Theory** — Noam Nisan, Tim Roughgarden, Éva Tardos e Vijay V. Vazirani (editores). Jogos algorítmicos, mecanismos e teoria da computacao.

## Sistemas operacionais, arquitetura de computadores e desempenho

- **Computer Systems: A Programmer's Perspective** — Randal E. Bryant e David R. O'Hallaron. Como compilação, memória, processos e hardware se refletem no código.
- **Operating Systems: Three Easy Pieces** — Remzi H. Arpaci-Dusseau e Andrea C. Arpaci-Dusseau. Virtualizacao, concorrencia e persistência em sistemas operacionais.
- **Modern Operating Systems** — Andrew S. Tanenbaum e Herbert Bos. Projeto e funcionamento de sistemas operacionais modernos.
- **The Linux Programming Interface** — Michael Kerrisk. Interfaces de sistema Linux, processos, memória, sinais e IPC.
- **Advanced Programming in the UNIX Environment** — W. Richard Stevens e Stephen A. Rago. Interfaces Unix e programacao de sistemas.
- **Linkers and Loaders** — John R. Levine. Formatos de objetos, ligação, carregamento e bibliotecas.
- **The Art of Multiprocessor Programming** — Maurice Herlihy, Nir Shavit, Victor Luchangco e Michael Spear. Algoritmos concorrentes, sincronização e consistência.
- **Systems Performance** — Brendan Gregg. Metodologia para medir e diagnosticar desempenho de sistemas.
- **BPF Performance Tools** — Brendan Gregg. Observabilidade e análise de desempenho com eBPF e BPF.
- **Performance Analysis and Tuning on Modern CPUs** — Denis Bakhvalov. Gargalos de CPU, microarquitetura e otimização de baixo nível.
- **Computer Architecture: A Quantitative Approach** — John L. Hennessy e David A. Patterson. Avaliacao quantitativa de arquiteturas e desempenho.
- **Computer Organization and Design: The Hardware/Software Interface** — David A. Patterson e John L. Hennessy. Organização de computadores e interface hardware/software, incluindo a edicao RISC-V.
- **Modern Processor Design: Fundamentals of Superscalar Processors** — John Paul Shen e Mikko H. Lipasti. Processadores superescalares e execução de instrucoes.
- **The Garbage Collection Handbook** — Richard Jones, Antony Hosking e Eliot Moss. Algoritmos, implementacoes e teoria de gerenciamento automático de memória.

## Linguagens e ecossistemas: C, C++, Rust, .NET, Java, Python e Go

### C e C++

- **Effective C: An Introduction to Professional C Programming** — Robert C. Seacord. Práticas seguras e definidas para programacao profissional em C.
- **Expert C Programming: Deep C Secrets** — Peter van der Linden. Modelo mental de C, compiladores, ligação e comportamento de baixo nível.
- **The C++ Programming Language** — Bjarne Stroustrup. Referência ampla da linguagem e de seus principios de projeto.
- **Effective Modern C++** — Scott Meyers. Uso de recursos modernos de C++; cobre principalmente C++11 e C++14.
- **C++ Templates: The Complete Guide** — David Vandevoorde, Nicolai M. Josuttis e Douglas Gregor. Templates, metaprogramacao e técnicas genericas.
- **Large-Scale C++ Software Design** — John Lakos. Dependencias, compilação e organização de bases C++ grandes.
- **C++ Software Design** — Klaus Iglberger. Principios e padrões para projeto de software moderno em C++.
- **Embracing Modern C++ Safely** — John Lakos, Vittorio Romeo, Rostislav Khlebnikov e Alisdair Meredith. Uso cuidadoso de recursos modernos de C++.
- **C++ High Performance** — Björn Andrist e Viktor Sehr. Otimização, profiling e desempenho de aplicações C++.

### Rust

- **Programming Rust** — Jim Blandy, Jason Orendorff e Leonora F. S. Tindall. Ownership, lifetimes, concorrencia e programacao de sistemas em Rust.
- **Rust for Rustaceans** — Jon Gjengset. Idiomas, abstrações e técnicas para quem já domina a linguagem.
- **Rust Atomics and Locks** — Mara Bos. Atomicos, memória compartilhada e primitivas de sincronização em Rust.
- **Zero To Production in Rust** — Luca Palmieri. Projeto de servicos backend, testes e operação de aplicações Rust.
- **The Rustonomicon** — Rust Project (livro online). Rust inseguro, invariantes e contratos da linguagem; leitura de referência para programacao `unsafe`.

### .NET e C#

- **C# in Depth** — Jon Skeet. Evolucao e semântica de recursos avançados de C#.
- **Pro .NET Memory Management** — Konrad Kokosa. Garbage collection, layout de memória e desempenho do runtime .NET.
- **Pro .NET Benchmarking** — Andrey Akinshin. Metodologia e ferramentas para benchmarks confiáveis no ecossistema .NET.
- **CLR via C#** — Jeffrey Richter. Fundamentos internos do CLR; conceitos importantes, embora partes do livro reflitam versoes antigas do .NET.
- **Writing High-Performance .NET Code** — Ben Watson. Profiling, alocacoes e otimização de aplicações .NET; confirme detalhes especificos na documentação atual.

### Java

- **Effective Java** — Joshua Bloch. APIs, generics, objetos, concorrencia e boas práticas de Java.
- **Java Performance: The Definitive Guide** — Scott Oaks. JVM, garbage collectors, profiling e ajuste de desempenho.
- **Java Concurrency in Practice** — Brian Goetz, Tim Peierls, Joshua Bloch, Joseph Bowbeer, David Holmes e Doug Lea. Fundamentos de concorrencia; complemente exemplos e APIs com material atualizado para a JVM atual.
- **Optimizing Java** — Benjamin J. Evans, James Gough e Chris Newland. Diagnóstico e otimização de JVMs e aplicações Java.

### Python e Go

- **Fluent Python** — Luciano Ramalho. Modelo de dados, iteradores, metaprogramacao e recursos idiomaticos de Python.
- **High Performance Python** — Micha Gorelick e Ian Ozsvald. Profiling, paralelismo e otimização de código Python.
- **Concurrency in Go** — Katherine Cox-Buday. Goroutines, canais e padrões de concorrencia em Go.

## Compiladores, linguagens de programacao e sistemas de tipos

- **Compilers: Principles, Techniques, and Tools** — Alfred V. Aho, Monica S. Lam, Ravi Sethi e Jeffrey D. Ullman. Análise lexica, parsing, semântica e geração de código.
- **Engineering a Compiler** — Keith D. Cooper e Linda Torczon. Projeto e implementacao de compiladores com foco em otimização.
- **Modern Compiler Implementation in C** — Andrew W. Appel. Implementacao de compiladores e representacoes intermediarias.
- **Crafting Interpreters** — Robert Nystrom. Construção passo a passo de interpretadores e máquinas virtuais.
- **Types and Programming Languages** — Benjamin C. Pierce. Fundamentos formais de calculo lambda e sistemas de tipos.
- **Advanced Topics in Types and Programming Languages** — editado por Benjamin C. Pierce. Sistemas de tipos avançados e suas aplicações.
- **Programming Language Pragmatics** — Michael L. Scott. Paradigmas, semântica e implementacao de linguagens.
- **Concepts, Techniques, and Models of Computer Programming** — Peter Van Roy e Seif Haridi. Modelos de computacao, concorrencia e paradigmas de programacao.
- **Semantics with Applications: A Formal Introduction** — Hanne Riis Nielson e Flemming Nielson. Semântica operacional e análise formal de programas.
- **Purely Functional Data Structures** — Chris Okasaki. Estruturas persistentes e algoritmos funcionais.
- **Functional Programming in Scala** — Paul Chiusano e Rúnar Bjarnason. Abstrações funcionais, efeitos e composicao em Scala.
- **Category Theory for Programmers** — Bartosz Milewski. Teoria das categorias aplicada a abstrações de programacao funcional.
- **Structure and Interpretation of Computer Programs** — Harold Abelson, Gerald Jay Sussman e Julie Sussman. Abstração, interpretação e modelos de computacao.
- **The Implementation of Functional Programming Languages** — Simon Peyton Jones. Implementacao de linguagens funcionais e redução de expressões.
- **Software Foundations** — Benjamin C. Pierce e colaboradores (livro online). Lógica, provas formais e fundamentos de linguagens usando Coq.
- **Programming Languages: Application and Interpretation** — Shriram Krishnamurthi (livro online). Interpretadores, semântica e projeto de linguagens.
- **Static Program Analysis** — Anders Møller e Michael I. Schwartzbach (livro online). Análise estatica, interpretação abstrata e verificação de propriedades.

## Redes, segurança de software e criptografia

- **Security Engineering** — Ross Anderson. Modelagem de ameaças, sistemas seguros, mecanismos e falhas reais.
- **Building Secure and Reliable Systems** — Heather Adkins e colaboradores. Engenharia conjunta de segurança e confiabilidade em sistemas.
- **Threat Modeling: A Practical Guide for Development Teams** — Adam Shostack. Identificacao sistematica de ameaças e mitigacoes.
- **Secure by Design** — Dan Bergh Johnsson, Daniel Deogun e Daniel Sawano. Principios de projeto para software seguro desde a arquitetura.
- **API Security in Action** — Neil Madden. Autenticacao, autorizacao e proteção de APIs.
- **The Art of Software Security Assessment** — Mark Dowd, John McDonald e Justin Schuh. Análise aprofundada de vulnerabilidades em software.
- **Software Security: Building Security In** — Gary McGraw. Processos e técnicas para integrar segurança ao ciclo de desenvolvimento.
- **Serious Cryptography** — Jean-Philippe Aumasson. Criptografia aplicada, primitivas e erros recorrentes de implementacao.
- **Real-World Cryptography** — David Wong. Protocolos e aplicações criptograficas modernas.
- **Cryptography Engineering** — Niels Ferguson, Bruce Schneier e Tadayoshi Kohno. Projeto seguro de sistemas criptograficos práticos.
- **Introduction to Modern Cryptography** — Jonathan Katz e Yehuda Lindell. Fundamentos formais e definicoes de segurança criptografica.
- **Cryptography: Theory and Practice** — Douglas R. Stinson e Maura B. Paterson. Teoria, protocolos e construcoes criptograficas.
- **TCP/IP Illustrated, Volume 1** — W. Richard Stevens e Kevin R. Fall. Protocolos TCP/IP observados em detalhe.
- **UNIX Network Programming, Volume 1** — W. Richard Stevens. Sockets, protocolos e programacao de rede em sistemas Unix.
- **Network Algorithmics** — George Varghese. Algoritmos e estruturas de dados para implementacao de redes de alto desempenho.
- **Computer Networking: A Top-Down Approach** — James Kurose e Keith Ross. Protocolos, camadas e fundamentos de redes.
- **High Performance Browser Networking** — Ilya Grigorik. HTTP, TCP, TLS e otimização de comunicação web.
- **HTTP/2 in Action** — Barry Pollard. Protocolo HTTP/2, multiplexacao e implicacoes para clientes e servidores.
- **Network Security Assessment** — Chris McNab. Metodologia e técnicas para avaliar a segurança de redes.

## Testes avançados, verificação formal e corretude

- **xUnit Test Patterns** — Gerard Meszaros. Padrões, cheiros e organização de suites de testes automatizados.
- **Growing Object-Oriented Software, Guided by Tests** — Steve Freeman e Nat Pryce. Desenvolvimento guiado por testes e desenho de sistemas orientados a objetos.
- **Software Testing and Analysis: Process, Principles, and Techniques** — Mauro Pezzè e Michal Young. Fundamentos tecnicos de análise e teste de software.
- **Introduction to Software Testing** — Paul Ammann e Jeff Offutt. Testes baseados em criterios, grafos e cobertura.
- **Property-Based Testing with PropEr, Erlang, and Elixir** — Fred Hebert. Propriedades, geração de casos e redução de contraexemplos.
- **The Fuzzing Book** — Andreas Zeller e colaboradores (livro online). Geração de entradas, fuzzing e descoberta automatizada de falhas.
- **Specifying Systems: The TLA+ Language and Tools for Hardware and Software Engineers** — Leslie Lamport. Especificacao formal e verificação de sistemas concorrentes.
- **Practical TLA+** — Hillel Wayne. Modelagem de sistemas distribuídos e concorrentes com TLA+.
- **Principles of Model Checking** — Christel Baier e Joost-Pieter Katoen. Verificação de modelos, lógicas temporais e sistemas reativos.
- **Model Checking** — Edmund M. Clarke, Orna Grumberg e Doron A. Peled. Teoria e algoritmos de verificação formal.

## Sistemas embarcados, IoT, redes industriais e RFID

- **Making Embedded Systems** — Elecia White. Arquitetura, depuracao e decisões de engenharia em sistemas embarcados.
- **Embedded Systems Architecture** — Daniele Lacamera. Projeto de firmware, drivers, RTOS e comunicação com hardware.
- **Programming Embedded Systems: With C and GNU Development Tools** — Michael Barr e Anthony Massa. C, toolchains e desenvolvimento embarcado.
- **Patterns for Time-Triggered Embedded Systems** — Michael J. Pont. Arquiteturas temporizadas e padrões para sistemas de tempo real.
- **Practical UML Statecharts in C/C++** — Miro Samek. Máquinas de estado e sistemas reativos embarcados.
- **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors** — Joseph Yiu. Arquitetura, excecoes e recursos de microcontroladores Cortex-M.
- **Real-Time Concepts for Embedded Systems** — Qing Li e Caroline Yao. Escalonamento, temporização e sistemas de tempo real.
- **Embedded Systems: Introduction to Arm Cortex-M Microcontrollers** — Jonathan W. Valvano. Microcontroladores, periféricos e programacao de baixo nível.
- **Practical Industrial Data Networks** — Steve Mackay, Edwin Wright, Deon Reynders e John Park. Projeto, instalação e diagnóstico de redes industriais.
- **Industrial Network Security** — Eric D. Knapp e Joel Thomas Langill. Ameaças e proteção de redes de automação industrial.
- **RFID Handbook: Fundamentals and Applications in Contactless Smart Cards, Radio Frequency Identification and Near-Field Communication** — Klaus Finkenzeller. Fundamentos de RFID, NFC, tags e leitores.
- **RFID Essentials** — Bill Glover e Himanshu Bhatt. Conceitos e implementacao de sistemas RFID.
- **The Art of Electronics** — Paul Horowitz e Winfield Hill. Eletrônica pratica para compreender e projetar circuitos.
- **The Embedded Systems Handbook** — editado por Richard Zurawski. Coleção de referência sobre arquitetura, tecnologias e aplicações embarcadas.

## Inteligencia artificial, dados e visao computacional

- **The Elements of Statistical Learning** — Trevor Hastie, Robert Tibshirani e Jerome Friedman. Fundamentos estatisticos de aprendizado supervisionado e modelos.
- **Pattern Recognition and Machine Learning** — Christopher M. Bishop. Inferência probabilistica, classificação e modelos graficos.
- **Probabilistic Machine Learning: An Introduction** — Kevin P. Murphy. Tratamento moderno e abrangente de aprendizado probabilistico.
- **Deep Learning** — Ian Goodfellow, Yoshua Bengio e Aaron Courville. Fundamentos matematicos e arquiteturas de deep learning.
- **Reinforcement Learning: An Introduction** — Richard S. Sutton e Andrew G. Barto. Aprendizado por reforco e metodos de decisão sequencial.
- **Bayesian Data Analysis** — Andrew Gelman e colaboradores. Modelagem bayesiana, inferência e diagnosticos.
- **Information Theory, Inference, and Learning Algorithms** — David J. C. MacKay. Teoria da informação, inferência bayesiana e aprendizado.
- **Computer Vision: Algorithms and Applications** — Richard Szeliski. Geometria, imagem, reconhecimento e algoritmos de visao computacional.
- **Multiple View Geometry in Computer Vision** — Richard Hartley e Andrew Zisserman. Geometria projetiva, calibracao e reconstrução 3D.
- **Computer Vision: Models, Learning, and Inference** — Simon J. D. Prince. Modelos probabilísticos e técnicas de aprendizado para visao computacional.
- **Probabilistic Robotics** — Sebastian Thrun, Wolfram Burgard e Dieter Fox. Localizacao, mapeamento e estimacao probabilistica para robos.
- **Data Mining: Concepts and Techniques** — Jiawei Han, Micheline Kamber e Jian Pei. Técnicas de mineração, padrões e análise de dados.
- **Mining of Massive Datasets** — Jure Leskovec, Anand Rajaraman e Jeffrey D. Ullman. Algoritmos escaláveis para grafos, streams e grandes conjuntos de dados.
- **Introduction to Information Retrieval** — Christopher D. Manning, Prabhakar Raghavan e Hinrich Schütze. Indexacao, busca, ranking e recuperação de informação.
- **Designing Machine Learning Systems** — Chip Huyen. Dados, treinamento, deploy, monitoramento e manutencao de sistemas de ML.
- **Machine Learning Engineering** — Andriy Burkov. Ciclo de vida de sistemas de aprendizado de maquina em produção.

## Sugestoes de trilhas

Não e necessario ler a lista em ordem. Escolha uma especializacao e combine teoria com implementacao:

- **Backend e sistemas distribuídos:** arquitetura de software -> DDD -> *Designing Data-Intensive Applications* -> bancos de dados -> Kafka/streaming -> SRE e observabilidade.
- **Sistemas e desempenho:** *Computer Systems: A Programmer's Perspective* -> sistemas operacionais -> programacao de sistema -> concorrencia -> profiling e arquitetura de CPU.
- **C++, Rust e embarcados:** fundamentos de sistemas -> livro avançado da linguagem -> concorrencia/memória -> RTOS e arquitetura de microcontroladores -> protocolos industriais ou RFID.
- **Compiladores e linguagens:** algoritmos e estruturas de dados -> linguagens formais e tipos -> compiladores -> implementacao de interpretadores -> análise estatica/formal.
- **Visao computacional e ML:** probabilidade e estatística -> aprendizado de maquina -> visao computacional -> geometria multivisão ou robotica probabilistica -> engenharia de ML.

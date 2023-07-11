# Welcome

My name is Yonathan. I'm a PhD student at the [University of Michigan](https://eecs.engin.umich.edu/) working on programming languages for hardware design with [Prof. Todd Austin](https://web.eecs.umich.edu/~taustin/) and [Jean-Baptiste Jeannin](http://www-personal.umich.edu/~jeannin/). I received my Bachelor's in computer science from the [University of Virginia](http://www.virginia.edu/). See my [resume](MyResume.pdf) for more details.


# Projects

**HardKAT (On Going)**

Domain-specific hardware acceleration is expected to be the main source of innovations as Moore’s law and Dennard scaling continue to slow down. This imminent shift towards domain-specific design and the corresponding faster pace of development has motivated the design of various new hardware description languages (HDLs) and Accelerator De- sign Languages (ADLs) that aim to improve development productivity. Unfortunately, many of these languages define their semantics informally and even when formally defined, the semantics might consider varying levels of abstractions of the hardware for design and simulation. In both cases, the task of verification is delegated to tools at lower abstractions, thus verification productivity does not scale alongside the design productivity offered by these new HDLs and ADLs. We introduce HardKAT, a foundation for Accelerator Design Languages with a focus on verification. HardKAT is an instance of Kleene Algebra with Tests (KAT), thus it has an equational theory that is expressive enough to describe various designs and verify many useful properties. We are currently working on a completeness proof as is usual for KATs. We demonstrate the effectiveness of the sequential fragment of the language for equational reasoning using a 1-bit mux design. The full fragment of HardKAT supports concurrency and can describe more complicated and larger designs. 

**Formal Verification of Sequestered Encryption (CCS'23)**

Sequestered Encryption (SE) is a hardware mechanism that enables computation on encrypted data in the style of homomorphic encryption. The root of trust is moved to very small functional units that can observe the data in it's plaintext state and the rest of the architecture, including the executing program, cannot observe the decrypted data. SE is work done by Lauren Biernacki and was published in SEED'22. This project aims to strengthen trust in the sensitive functional units of SE via formal verification of the design and implementation of SE.

**Twine (Published in Date'22)**

We aim to improve the re-usability and composability of hardware components. This is particularly important due to the current shift towards heterogeneous hardware design. To accomplish this, we are building on top of [Chisel](https://www.chisel-lang.org/) and providing a new set of interfaces that formalize the interaction between components. SimpleChisel hands the control signals and type conversions between components, freeing the designer from the busy work. The designer can focus on their data path specification. 

# Education

I went to [William Smith High School](https://wshs.exloer.com/") in Aurora, CO.  I concurrently attended the [Community College of Aurora](https://www.ccaurora.edu/) starting from sophomore year until senior year of high school. Additionally, I attended [Pickens Tech](https://www.pickenstech.org/) and studied mobile app development in my junior year. I received both my Associate's Degree in Science and High School Diploma in May 2016. I graduated with a Bachelor's of Science degree in Computer Science in May 2020.

Some of my favorite courses from undergrad include, Algorithms, Theory of Computation, Data and Program Representation, Operating Systems, Compilers, Program Analysis, and Software Testing. 

## Work Experience
I interned at the [University of Colorado School of Medicine]() as a Software Developer (2015-17) where I worked with researchers to quickly validate product concepts through prototypes and user testing. Then, I worked at [Impellia](http://impellia.co/) (2016-17) as a Software Developer and Consultant, helping the startup implement multiple projects that leverage algorithms designed and licenced by various universities. I interned at [Microsoft Intune](https://www.microsoft.com/en-us/cloud-platform/microsoft-intune)(Summer 2018) as a Software Engineer, where I designed and implemented various testing infrastructures and tools. In previous semesters, I have worked as a teaching assistant for CS 4102 (Algorithms) in the [CS department](https://engineering.virginia.edu/departments/computer-science), [CS 3240 (Advanced Software Development)](http://cs3240.cs.virginia.edu/), [CS 4640 (Programming Languages for Web Applications)](http://www.cs.virginia.edu/~up3f/cs4640/syllabus.html), and [CS 4414 (Operating Systems)](https://www.cs.virginia.edu/~cr4bd/4414/F2019/). My responsibilities included holding office hours to help students with homeworks, general questions, grading exams and homeworks, and leading labs. I'm fortunate to have had these positions where I was able to both learn from others and help others learn. I was a part of the 2019 REU program at UC Berkeley in the [NetSys lab](https://netsys.cs.berkeley.edu/) under [Professor Scott Shenker](https://www2.eecs.berkeley.edu/Faculty/Homepages/shenker.html) and [Anwar Hithnawi](https://hithnawi.com/) where I worked on private summarization of streaming data. My work explored cryptographic techniques that can enable streaming algorithms to process data in a privacy preserving manner. 

# Contact

Hit me up on [Twitter](https://twitter.com/YonathanFisseha) or via email at `[my first name] at [umich] dot [edu]` if any of my work interests you. You can also see some of my work on [GitHub](https://github.com/yonathanF).



---
layout: page
title: About Me
permalink: /
---

<img align="right" style="margin:10px" width="150" height="150" src="{{site.baseurl}}/assets/images/yonathan.jpg"> My name is Yonathan. I'm a PhD student at the [University of Michigan Ann Arbor](https://eecs.engin.umich.edu/) working on verifiable software/hardware engineering under [Prof. Todd Austin](https://web.eecs.umich.edu/~taustin/). I received my Bachelor's in computer science from the [University of Virginia](http://www.virginia.edu/).  My undergrad research was on compression-aware algorithms that work in a multi-party computation environment. See my [resume]({{site.baseurl}}/assets/MyResume.pdf) for more details.

# Projects

## [SimpleChisel](https://github.com/SimpleChisel/simple-chisel) [Current]

We aim to improve the re-usability and composability of hardware components. This is particularly important due to the current shift towards heterogeneous hardware design. To accomplish this, we are building on top of [Chisel](https://www.chisel-lang.org/) and providing a new set of interfaces that formalize the interaction between components. SimpleChisel hands the control signals and type conversions between components, freeing the designer from the busy work. The designer can focus on their data path specification. 

I am currently working on a verification framework for SimpleChisel that designers can use to get a formal verification on certain properties of their choosing. Additionally, we are formally verifying the semantics of SimpleChisel and providing an interface specification language, which will enable the designer to specify additional interfaces other than those defined by us and still receive the same level of support in control-signal automation. 

## [Repair Compression](https://github.com/yonathanF/Repair-Graph-Compression)
An implementation of the Repair algorithm for graph compression.  Includes experimental results on synthetic graphs, and achieves up to 70% compression ratio.  A detailed project documentation can be found [here]( https://repair-graph-compression.readthedocs.io/en/latest/index.html).


## [Bazaar](https://github.com/yonathanF/bazaar-clone)
This web app is a semester long, 3 person, class project for CS 4500 - Internet Scale Applications. We developed an e-commerce web application using Django (backend) and Vue (frontend). The stack also includes: Spark (Map-Reduce for search indexing other time consuming tasks), MySQL (persistent storage), Kafka (Message broker for services), Elastic Search (search functionality), Redis (cache), TravisCI (CI/CD), Digital Ocean (deployment), HAProxy (load balancing), Selenium (end-to-end testing), and JMeter (Performance testing).

## [Maximus](https://github.com/yonathanF/maximus)
A study of microservice architectures for a web application where services are implemented using different languages.  Languages and frameworks used include JSP/Servlet, PHP, and Django. Technologies used include Docker/Docker Swarm, Redis, PostgreSQL, and RabbitMQ.


# Education

I went to [William Smith High School](https://wshs.exloer.com/") in Aurora, CO.  I concurrently attended the [Community College of Aurora](https://www.ccaurora.edu/) starting from sophomore year until senior year of high school. Additionally, I attended [Pickens Tech](https://www.pickenstech.org/) and studied mobile app development in my junior year. I received both my Associate's Degree in Science and High School Diploma in May 2016. I graduated with a Bachelor's of Science degree in Computer Science in May 2020.

Some of my favorite courses from undergrad include, Algorithms, Theory of Computation, Data and Program Representation, Operating Systems, Compilers, Program Analysis, and Software Testing. 

## Work Experience
I interned at the [University of Colorado School of Medicine]() as a Software Developer (2015-17) where I worked with researchers to quickly validate product concepts through prototypes and user testing. Then, I worked at [Impellia](http://impellia.co/) (2016-17) as a Software Developer and Consultant, helping the startup implement multiple projects that leverage algorithms designed and licenced by various universities. I interned at [Microsoft Intune](https://www.microsoft.com/en-us/cloud-platform/microsoft-intune)(Summer 2018) as a Software Engineer, where I designed and implemented various testing infrastructures and tools. In previous semesters, I have worked as a teaching assistant for CS 4102 (Algorithms) in the [CS department](https://engineering.virginia.edu/departments/computer-science), [CS 3240 (Advanced Software Development)](http://cs3240.cs.virginia.edu/), [CS 4640 (Programming Languages for Web Applications)](http://www.cs.virginia.edu/~up3f/cs4640/syllabus.html), and [CS 4414 (Operating Systems)](https://www.cs.virginia.edu/~cr4bd/4414/F2019/). My responsibilities included holding office hours to help students with homeworks, general questions, grading exams and homeworks, and leading labs. I'm fortunate to have had these positions where I was able to both learn from others and help others learn. I was a part of the 2019 REU program at UC Berkeley in the [NetSys lab](https://netsys.cs.berkeley.edu/) under [Professor Scott Shenker](https://www2.eecs.berkeley.edu/Faculty/Homepages/shenker.html) and [Anwar Hithnawi](https://hithnawi.com/) where I worked on private summarization of streaming data. My work explored cryptographic techniques that can enable streaming algorithms to process data in a privacy preserving manner. 

# Contact

Hit me up on [Twitter](https://twitter.com/YonathanFisseha) or via email at <img style="margin:10px" width="150" height="150" src="{{site.baseurl}}/assets/images/email.png"> if any of my work interests you. You can also see some of my work on [GitHub](https://github.com/yonathanF) but we will have to wait until they introduce stories to talk there.

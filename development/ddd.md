# Learning DDD 
<script type="module">
  import mermaid from 'https://unpkg.com/mermaid@9/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true });
</script>

```{contents}
:local:
```

## Motivation to Learn DDD
When I learned Data mesh, I knew it was based design of DDD and microservices.
But I didn't know much about DDD so I try learning DDD.

## Who should Read This Article
- You want to know DDD.

## What's DDD?
DDD is called Domain-driven design that is method of software design.
When I heard of it for the first time, I thought "what's domain?".

### What's Domain, Domain model and Domain object?
The domain is problems that we'd like to solve with software.
On the other hand, the domain model is a simplified version of the solution for this problem.
They can't solve the problems because they are not object. The object is defined as domain that is domain object. 

- Domain: This is concept to solve problems.
- Domain model: This is modeled for problems.
- Domain object: This is module to run as program.

### I try to implement DDD with Rust
I think the fact that try implementing DDD is easy for me to understand it. 

#### Example
First of all, I have to decide what to create app.
I'll create a diary app. This is a simple app.
System requirements document are

- You can create a diary.
- You can only write 140 characters.
- You can create it once a day.

It's too useless. lol

I had an idea for the first time, Diary domain.

<div class=mermaid>
classDiagram
  class Diary
</div>



```rust
struct Diary {
  text: String
}
```


## References.
### Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/A2EU0paEVJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This video in Japanese is easy for me to understand DDD.
### Book
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=yujikawa-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=479815072X&linkId=87bf829477d756e835a723cd05454e93"></iframe>

This book is based implementations to learn DDD.

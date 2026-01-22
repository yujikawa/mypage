---
title: "Introduce to PyO3"
description: "RustとPythonのバインディングライブラリPyO3の紹介記事です。"
pubDate: "2024-01-01T00:00:00Z"
---
# Introduce to PyO3 
![Rust](https://img.shields.io/badge/Language-Rust-orange)
![Python](https://img.shields.io/badge/Language-Python-blue)

```{contents}
:local:
```

## Overview
Hi, there. 

I talk to you about [PyO3](https://github.com/PyO3/pyo3). This library is Rust library for binding Python.

In short, we can create Python library with Rust!!

In my opinion, the fact that I want to use Rust is fast.
But I also want to use Python so the problem is solve with PyO3.

Let's check PyO3 together!

## Who should Read This Article
- Python users
- Rust users
- You want to speed up for Python

## What's PyO3?
It is Rust library for binding Python.
https://github.com/PyO3/pyo3

## How to use it?
I recommend using maturin to use PyO3.
You can create new project with [maturin-cli](https://github.com/PyO3/maturin) which is to develop tools with PyO3 easily.

### Install
```
pip install maturin
```

### Create new project
I try to make new project for creating fibonacci sequence.

```
maturin new fib_rs
```

When you create new project, this is default code.

```{code-block} rust
use pyo3::prelude::*;

/// Formats the sum of two numbers as string.
#[pyfunction]
fn sum_as_string(a: usize, b: usize) -> PyResult<String> {
    Ok((a + b).to_string())
}

/// A Python module implemented in Rust.
#[pymodule]
fn fib_rs(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(sum_as_string, m)?)?;
    Ok(())
}
```

Let's create fibonacci sequence

```{code-block} rust
use pyo3::prelude::*;

fn fib_result(n: usize) -> usize {
    if n < 2 {
        return  n;
    } else {
        return  fib_result(n-1) + fib_result(n-2);
    }
}

#[pyfunction]
fn fib(n: usize) -> PyResult<usize> {
    Ok(fib_result(n)) 
}

#[pymodule]
fn fib_rs(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(fib, m)?)?;
    Ok(())
}
```

### Run program
First of all, you should create venv.

```
python -m venv .venv
```

```{note}
Virtualenv is also OK
```

Second, set environment for VIRTUAL_ENV.

```
export VIRTUAL_ENV=.venv
```

Finally, you run maturin-cli.

```
maturin develop
🔗 Found pyo3 bindings
--- SKIP ---
🛠  Installed fib_rs-0.1.0
```

fib_rs library is installed into venv.


```
~$ source .venv/bin/activate
(.venv) ~$ python
Python 3.10.0 (default, Apr 24 2022, 21:07:51) [Clang 13.0.0 (clang-1300.0.27.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import fib_rs
>>> fib_rs.fib(10)
55
```

It works!
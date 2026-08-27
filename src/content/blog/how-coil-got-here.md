---
title: How Coil got here
description: A small, statically typed scripting language.
date: 2026-08-27
---

# How Coil got here

A small, statically typed scripting language.

I started this as an experiment. I have been taking things apart since I was a kid. Old TVs, mostly. I wanted to see what was inside.

Interpreters were the same itch. I picked up Crafting Interpreters because I wanted to know how one actually runs. I tried it in C. Those attempts did not go well, and I am impatient, so I started learning Rust at the same time as I wrote the next interpreter. That pairing sounds like a bad idea. It was also how this project survived. I am stubborn too. That is how I made myself a programmer in the first place.

I never found a language that fitted me 100%. I liked how easy PHP and JavaScript are to sit down and use, and I did not like how they treat types. I liked Rust's syntax and its Hindley-Milner type system. Lua I noticed when I moved to Neovim: small, simple, and it still does a lot. Coil is the mix I wanted. Simple to write. Types that hold. A core that stays small.

A lot of time later I had something that mostly worked. Most of the VM is still that foundation. So is the first compiler, and the type checker. I hand-rolled a parser, then switched to chumsky because it made the work possible.

I called it zero-script because I wanted the core small. The name was taken, and it was a mouthful. Coil is better. A coil is a small part. A lot of things tick because of one.

Source files are `.hy` because henry is the SI unit of inductance. Programs compile to `.hyc` and run on the VM. Types are Hindley-Milner, so you get checking without a heavyweight toolchain.

It is 0.1.0. You clone it and `cargo build`. There is no installer yet. This site is new.

That is the state I am starting from.

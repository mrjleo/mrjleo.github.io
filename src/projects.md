---
tags: page
title: Projects
layout: markdown
---

# {{title}}

## IR Explorer

IR Explorer (IRex) is a platform for information retrieval researchers and practitioners. It enables users to gain better understanding of their data and models in order to improve existing retrieval, ranking, or RAG systems.

Current features include:

- Full-text search over document corpora
- Exploration and visualization of ranking datasets
- Retrieval-augmented generation using off-the-shelf or custom LLMs
- LLM-based summaries of documents

[GitHub](https://github.com/ir-explorer) | [Demo](https://irex.jleo.net)

## Fast-Forward Indexes

Fast-Forward indexes combine the effectiveness of neural Transformer-based retrieval methods and the efficiency of lexical retrieval methods.

The main features are:

- Fast CPU-based neural ranking
- Memory- and disk-based indexes
- Index compression via _sequential coalescing_
- Heuristic _early stopping_ technique to limit the number of index look-ups
- PyTerrier integration

```
pip install fast-forward-indexes
```

[Documentation](https://mrjleo.github.io/fast-forward-indexes/docs) | [GitHub](https://github.com/mrjleo/fast-forward-indexes) | [PyPI](https://pypi.org/project/fast-forward-indexes/)

## Ranking Utilities

This library provides utilities for training neural ranking models, offering integration with [PyTorch Lightning](https://www.pytorchlightning.ai/).

- Dataset parsing and pre-processing
- Pointwise and pairwise training loss
- Validation using ranking metrics

[GitHub](https://github.com/mrjleo/ranking-utils)

## Ranking Models

This repository contains the implementations of our neural ranking models as well as some baselines. It supports training, validation, testing, and re-ranking.

[GitHub](https://github.com/mrjleo/ranking-models)

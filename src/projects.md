---
tags: page
title: Projects
layout: markdown
---

# {{title}}

## Fast-Forward Indexes

Fast-Forward indexes combine the efficiency of lexical sparse retrieval methods with the effectiveness of semantic dense retrieval methods. Our approach
outperforms both sparse (e.g. BM25) and dense (e.g. TCT-ColBERT) retrievers and is more efficient than dense retrieval.

```
pip install fast-forward-indexes
```

- Fast CPU-based ranking
- Index compression
- Early stopping for efficiency

[API](https://mrjleo.github.io/fast-forward-indexes/latest/fast_forward.html) | [GitHub](https://github.com/mrjleo/fast-forward-indexes) | [PyPI](https://pypi.org/project/fast-forward-indexes/)

## Ranking Models

This repository contains the implementations of our ranking models as well as some baselines. It supports training, validation, testing and re-ranking.

[GitHub](https://github.com/mrjleo/ranking-models)

## Ranking Utilities

This library provides utilities for training ranking models, offering integration with [PyTorch Lightning](https://www.pytorchlightning.ai/).

- Dataset parsing and pre-processing
- Pointwise and pairwise training loss
- Validation using ranking metrics

[GitHub](https://github.com/mrjleo/ranking-utils)

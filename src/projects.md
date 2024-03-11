---
tags: page
title: Projects
layout: markdown
---

# {{title}}

## Fast-Forward Indexes

Fast-Forward indexes combine the efficiency of lexical sparse retrieval methods with the effectiveness of semantic dense retrieval methods. The main features are:

- Fast CPU-based ranking
- Memory- and disk-based indexes
- Index compression via _sequential coalescing_
- Heuristic _early stopping_ technique to limit number of index look-ups
- PyTerrier integration

```
pip install fast-forward-indexes
```

[Documentation](https://mrjleo.github.io/fast-forward-indexes/docs) | [GitHub](https://github.com/mrjleo/fast-forward-indexes) | [PyPI](https://pypi.org/project/fast-forward-indexes/)

## Ranking Models

This repository contains the implementations of our ranking models as well as some baselines. It supports training, validation, testing and re-ranking.

[GitHub](https://github.com/mrjleo/ranking-models)

## Ranking Utilities

This library provides utilities for training ranking models, offering integration with [PyTorch Lightning](https://www.pytorchlightning.ai/).

- Dataset parsing and pre-processing
- Pointwise and pairwise training loss
- Validation using ranking metrics

[GitHub](https://github.com/mrjleo/ranking-utils)

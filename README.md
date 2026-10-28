# Single-cell Hi-C workflow tutorials — public test

**[Read the tutorial website](https://rawandy2001-design.github.io/benchmark-tutorials/)** ·
**[Open the notebook index](tutorials/tutorials.ipynb)**

This standalone public test contains six main notebooks, five task webpages
and a web index. It can be reviewed independently before a later integration
with the companion project.

| Workflow | Web tutorial | Notebook |
|---|---|---|
| Index | [Website](https://rawandy2001-design.github.io/benchmark-tutorials/) | [Notebook](tutorials/tutorials.ipynb) |
| Data preparation | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/data_preparation.html) | [Notebook](tutorials/data_preparation.ipynb) |
| Embedding | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/embedding.html) | [Notebook](tutorials/embedding.ipynb) |
| Compartment | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/compartment.html) | [Notebook](tutorials/compartment.ipynb) |
| Domain/TAD | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/tad.html) | [Notebook](tutorials/tad.ipynb) |
| Loop, including figures | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/loop.html) | [Notebook](tutorials/loop.ipynb) |

The notebooks show command examples, source-file excerpts and retained figures.
Compartment preserves the upstream code cells and saved outputs, with hierarchical headings and brief section descriptions. The other notebooks display commands as Markdown. Reading the HTML pages or notebook previews does not execute analyses.

The [companion analysis repository](https://github.com/rawandy2001-design/benchmark) contains implementation scripts,
shared path setup and task-specific environment instructions. It remains private;
opening its source links requires access. Displayed commands use that code checkout
and separately configured inputs, checkpoints and native software environments.

## Local preview

From this folder, run:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8765/`. The site has no build dependency.

## Layout

```text
index.html       web index
tutorials/       main notebooks, task pages and compatibility links
.nojekyll        serve the static HTML files directly with GitHub Pages
README.md        entry points and publication notes
```

Tutorial snapshot: 2026-10-27, companion revision `02e6c9eb2bb9c4b549b197b4b47fd5d9ae34ada8`.
Compartment preserves the original Tan/Neuron settings, code cells and saved outputs from daydayupzzl/compartment commit e068313; its headings are organized into two levels, with brief descriptions of the main sections. Other notebooks retain their command examples and embedded figures.
Experimental input files and model checkpoints are configured separately.

## Previous Compartment version

[Read the standalone previous tutorial](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/compartment-previous.html) or [open its notebook](tutorials/compartment-previous.ipynb). This preserves the explanation-based Compartment tutorial from `2cd016d`, before restoration of the original-source evaluation notebook. Implementation links use the matching private code revision `02e6c9e`.

Loop figure generation and the retained panels are included in the [Loop tutorial](tutorials/loop.ipynb#Workflow-ranking-and-figures). The former figure-only URLs are compatibility links.

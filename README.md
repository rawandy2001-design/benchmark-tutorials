# Single-cell Hi-C workflow tutorials — public test

**[Read the tutorial website](https://rawandy2001-design.github.io/benchmark-tutorials/)** ·
**[Open the notebook index](tutorials/tutorials.ipynb)**

This standalone public test contains seven reading notebooks, six task webpages
and a web index. It can be reviewed independently before a later integration
with the companion project.

| Workflow | Web tutorial | Notebook |
|---|---|---|
| Index | [Website](https://rawandy2001-design.github.io/benchmark-tutorials/) | [Notebook](tutorials/tutorials.ipynb) |
| Data preparation | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/data_preparation.html) | [Notebook](tutorials/data_preparation.ipynb) |
| Embedding | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/embedding.html) | [Notebook](tutorials/embedding.ipynb) |
| Compartment | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/compartment.html) | [Notebook](tutorials/compartment.ipynb) |
| Domain/TAD | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/tad.html) | [Notebook](tutorials/tad.ipynb) |
| Loop | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/loop.html) | [Notebook](tutorials/loop.ipynb) |
| Loop figures | [HTML](https://rawandy2001-design.github.io/benchmark-tutorials/tutorials/loop_figures.html) | [Notebook](tutorials/loop_figures.ipynb) |

The notebooks show command examples, source-file excerpts and retained figures.
They are Markdown reading tutorials and do not start analysis jobs. The published
site renders the HTML pages; GitHub also previews the `.ipynb` files.

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
tutorials/       seven notebooks and six HTML task pages
.nojekyll        serve the static HTML files directly with GitHub Pages
README.md        entry points and publication notes
```

Tutorial snapshot: 2026-10-27, companion revision `02e6c9eb2bb9c4b549b197b4b47fd5d9ae34ada8`.
Notebook command blocks, source excerpts and embedded figure data are preserved.
Experimental input files and model checkpoints are configured separately.

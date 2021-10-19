# pandoc --standalone --katex=https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/ -f latex -t html txt.tex -o index.html
pandoc --katex=https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/ -f latex -t html txt.tex -o txt.html

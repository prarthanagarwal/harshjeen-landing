<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the company landing page at the index route, with semantic visual tokens in the global stylesheet, so the public entry point and visual identity remain consistent.
- Use external links for the app and founder portfolio rather than duplicating their content, so each property remains independently maintained.
- Pre-optimize the landing page's shared UI dependencies in Vite so late dependency discovery cannot replace React beneath an open preview renderer.
- Store uploaded page imagery as asset pointers and load display/body fonts through stylesheet font faces and root head links so media and typography remain independent of page markup.

# Editorial Portfolio

使用 `Astro + Tailwind CSS` 构建的设计师/创意类个人主页，适合部署到 GitHub Pages。

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

## Customize

- 站点基础信息：`src/data/site.ts`
- 项目内容：`src/content/work/*.md`
- 全局布局和 SEO：`src/layouts/BaseLayout.astro`
- 首页结构：`src/pages/index.astro`
- 案例详情页：`src/pages/work/[slug].astro`
- 全局视觉样式：`src/styles/global.css`
- GitHub Pages 站点地址：`astro.config.mjs`

## Notes

- `src/content/work/*.md` 中的 `slug` 是 Astro 的保留 frontmatter 字段，用于生成作品详情页链接。
- 构建输出目录是 `dist/`。
- 当前示例图片位于 `public/images/`，可直接替换成真实项目封面。

import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Calendar, ArrowLeft, X, FileText } from "lucide-react";
import { Link, useRoute, useLocation } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { blogPosts } from "@/lib/data";
import type { BlogPost } from "@shared/schema";

const sortPostsById = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => parseInt(b.id) - parseInt(a.id));
};

function BlogSidebar({
  posts,
  searchQuery,
  setSearchQuery,
  selectedPostId,
  onSelectPost,
}: {
  posts: BlogPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPostId: string | null;
  onSelectPost: (post: BlogPost) => void;
}) {
  posts = sortPostsById(posts);
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  return (
    <aside className="w-full lg:w-80 border-r border-border bg-muted/30 flex flex-col h-full" data-testid="sidebar-blog">
      <div className="p-4 border-b border-border space-y-4">
        <h2 className="font-semibold text-lg" data-testid="text-blog-title">Blog Posts</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-9"
            data-testid="input-blog-search"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
              data-testid="button-clear-search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filteredPosts.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8" data-testid="text-no-posts">
              No posts found matching "{searchQuery}"
            </p>
          ) : (
            filteredPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => onSelectPost(post)}
                className={`w-full text-left p-3 rounded-lg transition-colors hover-elevate ${
                  selectedPostId === post.id
                    ? "bg-muted"
                    : ""
                }`}
                data-testid={`button-blog-post-${post.id}`}
              >
                <h3 className="font-medium text-sm line-clamp-2 mb-1" data-testid={`text-post-title-${post.id}`}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span data-testid={`text-post-date-${post.id}`}>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}

function BlogContent({ post, notFound }: { post: BlogPost | null; notFound?: boolean }) {
  if (notFound) {
    return (
      <div className="flex-1 flex items-center justify-center p-8" data-testid="blog-not-found">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8 text-destructive" />
          </div>
          <h3 className="text-xl font-semibold">Post Not Found</h3>
          <p className="text-muted-foreground">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/blog" data-testid="link-back-to-blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex-1 flex items-center justify-center p-8" data-testid="blog-empty-state">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
            <Calendar className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold">Select a Post</h3>
          <p className="text-muted-foreground">
            Choose a blog post from the sidebar to start reading.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="flex-1 overflow-auto" data-testid="blog-content">
      <div className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-12">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.createdAt} data-testid="text-post-published-date">
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold" data-testid="text-post-heading">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2" data-testid="tags-container">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-tag-${tag}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none" data-testid="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const inline = !match;
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg !my-4"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-8 mb-3 border-b border-border pb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="my-4 leading-relaxed text-foreground/90">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="my-4 space-y-2 list-disc pl-6">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-4 space-y-2 list-decimal pl-6">{children}</ol>
              ),
              li: ({ children }) => <li className="text-foreground/90">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  const [location, setLocation] = useLocation();
  const [matchSlug, params] = useRoute("/blog/:slug");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    if (matchSlug && params?.slug) {
      const post = blogPosts.find((p) => p.slug === params.slug);
      if (post) {
        setSelectedPost(post);
        setNotFound(false);
      } else {
        setSelectedPost(null);
        setNotFound(true);
      }
    } else {
      const sortedPosts = sortPostsById(blogPosts);
      setSelectedPost(sortedPosts[0] || null);
      setNotFound(false);
    }
  }, [matchSlug, params?.slug]);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    setNotFound(false);
    setLocation(`/blog/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 pt-16 flex flex-col lg:flex-row">
        <div className="lg:hidden p-4 border-b border-border">
          <Link href="/" data-testid="link-back-home">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-col lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
          <div className="p-4 border-b border-border">
            <Link href="/" data-testid="link-back-home-desktop">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <BlogSidebar
            posts={blogPosts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedPostId={selectedPost?.id || null}
            onSelectPost={handleSelectPost}
          />
        </div>

        <div className="lg:hidden">
          <BlogSidebar
            posts={blogPosts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedPostId={selectedPost?.id || null}
            onSelectPost={handleSelectPost}
          />
        </div>

        <BlogContent post={selectedPost} notFound={notFound} />
      </div>
      <Footer />
    </div>
  );
}

const Home = () => {
  return (
    <div style={{ paddingTop: "40px" }} className="pt-8 md:pt-10">
      {/* Badge */}
      <div
        className="inline-flex items-center gap-1.5  border border-accent/20 rounded-full px-4 py-1 text-xs text-accent font-medium mb-7 tracking-wide"
        style={{
          gap: "6px",
          background: "var(--accent-soft)",
          border: "1px solid var(--accent-glow)",
          borderRadius: "100px",
          padding: "4px 14px",
          fontSize: "12px",
          color: "var(--accent)",
          fontWeight: 500,
          marginBottom: "28px",
          letterSpacing: "0.02em",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "inline-block",
          }}
        />
        v18 · React Docs
      </div>

      {/* Headline */}
      <h1
        className="text-4xl md:text-6xl text-white mb-5 max-w-xl leading-tight"
        style={{
          color: "var(--text)",
          marginBottom: "20px",
          maxWidth: "600px",
        }}
      >
        The library for{" "}
        <span style={{ color: "var(--accent)", fontStyle: "italic" }}>web</span>{" "}
        and native user interfaces
      </h1>

      <p
        className="text-text-dim text-sm md:text-base max-w-lg leading-relaxed mb-8"
        style={{
          color: "var(--text-dim)",
          fontSize: "16px",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like a thumbnail, avatar,
        or button.
      </p>

      {/* CTA row */}
      <div className="text-center flex flex-col sm:flex-row gap-3">
        <a
          href="/Learn"
          style={{
            display: "inline-block",
            padding: "11px 24px",
            background: "var(--accent)",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Learn React →
        </a>
        <a
          href="/about"
          className="inline-block text-center px-6 py-2.5 bg-transparent text-text-dim border border-border hover:border-accent hover:text-white rounded-xl text-sm font-medium no-underline transition-all"
          onMouseOver={(e) => {
            {
              /*هنا لما المستخدم بيقف علي الزر اللون بيتغير */
            }
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--text)";
          }}
          onMouseOut={(e) => {
            {
              /*هنا لما الموس يتحرك من علي الزر بيرجع كل حاجه زي ماهي */
            }
            e.currentTarget.style.borderColor = "var(--border-hover)";
            e.currentTarget.style.color = "var(--text-dim)";
          }}
        >
          About
        </a>
      </div>

      {/* Divider */}
      <div
        className=" my-12"
        style={{
          height: "1px",
          background: "var(--border)",
        }}
      />

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            icon: "⬡",
            title: "Component-Based",
            desc: "Build encapsulated components that manage their own state.",
          },
          {
            icon: "⟳",
            title: "Declarative",
            desc: "React makes it painless to create interactive UIs.",
          },
          {
            icon: "◈",
            title: "Learn Once",
            desc: "Develop new features in React without rewriting existing code.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "24px",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.borderColor = "var(--border-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div style={{ fontSize: "22px", marginBottom: "12px" }}>{icon}</div>
            <h3 style={{ marginBottom: "8px", fontSize: "15px" }}>{title}</h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

const Home = () => {
  return (
    <div style={{ paddingTop: "40px" }}>
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
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
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
          style={{
            display: "inline-block",
            padding: "11px 24px",
            background: "transparent",
            color: "var(--text-dim)",
            border: "1px solid var(--border-hover)",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}
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
        style={{
          height: "1px",
          background: "var(--border)",
          margin: "64px 0 48px",
        }}
      />

      {/* Feature cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
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

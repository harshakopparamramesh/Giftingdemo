// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  products;
  inquiries;
  orders;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.products = /* @__PURE__ */ new Map();
    this.inquiries = /* @__PURE__ */ new Map();
    this.orders = /* @__PURE__ */ new Map();
    this.seedInitialData();
  }
  seedInitialData() {
    const initialProducts = [
      {
        name: "Gourmet Gift Basket",
        category: "Premium",
        price: "From $99",
        image: "/assets/generated_images/Gourmet_gift_basket_9f76f878.png",
        description: "Artisanal foods, premium chocolates, specialty coffee, and fine wine elegantly presented.",
        stock: 42
      },
      {
        name: "Corporate Wellness Set",
        category: "Wellness",
        price: "From $75",
        image: "/assets/generated_images/Corporate_wellness_gift_set_d31857eb.png",
        description: "Yoga mat, water bottle, healthy snacks, and wellness journal for employee well-being.",
        stock: 38
      },
      {
        name: "Tech Accessories Bundle",
        category: "Tech",
        price: "From $120",
        image: "/assets/generated_images/Tech_accessories_gift_bundle_459f8217.png",
        description: "Wireless charger, bluetooth speaker, power bank, and premium headphones.",
        stock: 25
      },
      {
        name: "Wine & Cheese Collection",
        category: "Premium",
        price: "From $150",
        image: "/assets/generated_images/Wine_and_cheese_gift_127df6e8.png",
        description: "Fine wines with artisanal cheese selection in elegant wooden presentation.",
        stock: 18
      },
      {
        name: "Office Essentials Luxury",
        category: "Executive",
        price: "From $180",
        image: "/assets/generated_images/Office_accessories_gift_set_bbdf85af.png",
        description: "Premium desk organizer, fountain pen, leather accessories for executives.",
        stock: 15
      },
      {
        name: "Employee Appreciation Box",
        category: "Employee",
        price: "From $65",
        image: "/assets/generated_images/Employee_appreciation_gift_set_6548d5da.png",
        description: "Personalized items including notebook, premium pen, coffee mug, and treats.",
        stock: 56
      },
      {
        name: "Festive Holiday Hamper",
        category: "Festive",
        price: "From $110",
        image: "/assets/generated_images/Festive_corporate_gift_hamper_941be143.png",
        description: "Seasonal delights with gourmet treats, wine, and holiday decorations.",
        stock: 32
      },
      {
        name: "Executive Gift Set",
        category: "Executive",
        price: "From $200",
        image: "/assets/generated_images/Premium_executive_gift_box_3b1264b9.png",
        description: "Luxury leather goods, premium accessories, and personalized executive items.",
        stock: 12
      }
    ];
    const productIds = [];
    initialProducts.forEach((product) => {
      const id = randomUUID();
      productIds.push(id);
      this.products.set(id, { ...product, id, stock: product.stock ?? 0 });
    });
    const sampleOrders = [
      {
        company: "Tech Solutions Inc",
        amount: "$2,450",
        status: "pending",
        date: /* @__PURE__ */ new Date("2025-01-15"),
        items: JSON.stringify([{ productId: productIds[0], quantity: 25 }])
      },
      {
        company: "Global Finance Corp",
        amount: "$5,200",
        status: "completed",
        date: /* @__PURE__ */ new Date("2025-01-14"),
        items: JSON.stringify([{ productId: productIds[1], quantity: 50 }])
      },
      {
        company: "Marketing Pro Agency",
        amount: "$1,850",
        status: "processing",
        date: /* @__PURE__ */ new Date("2025-01-13"),
        items: JSON.stringify([{ productId: productIds[2], quantity: 15 }])
      }
    ];
    sampleOrders.forEach((order) => {
      const id = randomUUID();
      this.orders.set(id, { ...order, id });
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async getAllProducts() {
    return Array.from(this.products.values());
  }
  async getProduct(id) {
    return this.products.get(id);
  }
  async createProduct(insertProduct) {
    const id = randomUUID();
    const product = { ...insertProduct, id, stock: insertProduct.stock ?? 0 };
    this.products.set(id, product);
    return product;
  }
  async updateProduct(id, updates) {
    const product = this.products.get(id);
    if (!product) return void 0;
    const updated = { ...product, ...updates };
    this.products.set(id, updated);
    return updated;
  }
  async deleteProduct(id) {
    return this.products.delete(id);
  }
  async getAllInquiries() {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getInquiry(id) {
    return this.inquiries.get(id);
  }
  async createInquiry(insertInquiry) {
    const id = randomUUID();
    const inquiry = {
      ...insertInquiry,
      phone: insertInquiry.phone ?? null,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
  async getAllOrders() {
    return Array.from(this.orders.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }
  async getOrder(id) {
    return this.orders.get(id);
  }
  async createOrder(insertOrder) {
    const id = randomUUID();
    const order = {
      ...insertOrder,
      status: insertOrder.status ?? "pending",
      id,
      date: /* @__PURE__ */ new Date()
    };
    this.orders.set(id, order);
    return order;
  }
  async updateOrder(id, updates) {
    const order = this.orders.get(id);
    if (!order) return void 0;
    const updated = { ...order, ...updates };
    this.orders.set(id, updated);
    return updated;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(),
  price: text("price").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  stock: integer("stock").notNull().default(0)
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true
});
var inquiries = pgTable("inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().default(sql`now()`)
});
var insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true
});
var orders = pgTable("orders", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  company: text("company").notNull(),
  amount: text("amount").notNull(),
  status: text("status").notNull().default("pending"),
  date: timestamp("date").notNull().default(sql`now()`),
  items: text("items").notNull()
});
var insertOrderSchema = createInsertSchema(orders).omit({
  id: true,
  date: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getAllProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });
  app2.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid product data" });
      }
      res.status(500).json({ error: "Failed to create product" });
    }
  });
  app2.put("/api/products/:id", async (req, res) => {
    try {
      const partialSchema = insertProductSchema.partial();
      const validatedData = partialSchema.parse(req.body);
      const product = await storage.updateProduct(req.params.id, validatedData);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid product data" });
      }
      res.status(500).json({ error: "Failed to update product" });
    }
  });
  app2.delete("/api/products/:id", async (req, res) => {
    try {
      const success = await storage.deleteProduct(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  });
  app2.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid inquiry data" });
      }
      res.status(500).json({ error: "Failed to create inquiry" });
    }
  });
  app2.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries2 = await storage.getAllInquiries();
      res.json(inquiries2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });
  app2.get("/api/orders", async (req, res) => {
    try {
      const orders2 = await storage.getAllOrders();
      res.json(orders2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });
  app2.post("/api/orders", async (req, res) => {
    try {
      const validatedData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(validatedData);
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid order data" });
      }
      res.status(500).json({ error: "Failed to create order" });
    }
  });
  app2.put("/api/orders/:id", async (req, res) => {
    try {
      const partialSchema = insertOrderSchema.partial();
      const validatedData = partialSchema.parse(req.body);
      const order = await storage.updateOrder(req.params.id, validatedData);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid order data" });
      }
      res.status(500).json({ error: "Failed to update order" });
    }
  });
  app2.get("/api/stats", async (req, res) => {
    try {
      const products2 = await storage.getAllProducts();
      const orders2 = await storage.getAllOrders();
      const totalProducts = products2.length;
      const totalStock = products2.reduce((sum, p) => sum + p.stock, 0);
      const pendingOrders = orders2.filter((o) => o.status === "pending").length;
      const totalRevenue = orders2.filter((o) => o.status === "completed").reduce((sum, o) => {
        const amount = parseFloat(o.amount.replace(/[^0-9.]/g, ""));
        return sum + (isNaN(amount) ? 0 : amount);
      }, 0);
      res.json({
        totalProducts,
        totalStock,
        pendingOrders,
        totalRevenue: `$${totalRevenue.toLocaleString()}`,
        growth: "+12.5%"
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      ),
      await import("@replit/vite-plugin-dev-banner").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();

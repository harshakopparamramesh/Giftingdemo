import {
  type User,
  type InsertUser,
  type Product,
  type InsertProduct,
  type Inquiry,
  type InsertInquiry,
  type Order,
  type InsertOrder,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;

  getAllInquiries(): Promise<Inquiry[]>;
  getInquiry(id: string): Promise<Inquiry | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  getAllOrders(): Promise<Order[]>;
  getOrder(id: string): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrder(id: string, order: Partial<InsertOrder>): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private inquiries: Map<string, Inquiry>;
  private orders: Map<string, Order>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.inquiries = new Map();
    this.orders = new Map();
    this.seedInitialData();
  }

  private seedInitialData() {
    const initialProducts: InsertProduct[] = [
      {
        name: "Gourmet Gift Basket",
        category: "Premium",
        price: "From $99",
        image: "/assets/generated_images/Gourmet_gift_basket_9f76f878.png",
        description: "Artisanal foods, premium chocolates, specialty coffee, and fine wine elegantly presented.",
        stock: 42,
      },
      {
        name: "Corporate Wellness Set",
        category: "Wellness",
        price: "From $75",
        image: "/assets/generated_images/Corporate_wellness_gift_set_d31857eb.png",
        description: "Yoga mat, water bottle, healthy snacks, and wellness journal for employee well-being.",
        stock: 38,
      },
      {
        name: "Tech Accessories Bundle",
        category: "Tech",
        price: "From $120",
        image: "/assets/generated_images/Tech_accessories_gift_bundle_459f8217.png",
        description: "Wireless charger, bluetooth speaker, power bank, and premium headphones.",
        stock: 25,
      },
      {
        name: "Wine & Cheese Collection",
        category: "Premium",
        price: "From $150",
        image: "/assets/generated_images/Wine_and_cheese_gift_127df6e8.png",
        description: "Fine wines with artisanal cheese selection in elegant wooden presentation.",
        stock: 18,
      },
      {
        name: "Office Essentials Luxury",
        category: "Executive",
        price: "From $180",
        image: "/assets/generated_images/Office_accessories_gift_set_bbdf85af.png",
        description: "Premium desk organizer, fountain pen, leather accessories for executives.",
        stock: 15,
      },
      {
        name: "Employee Appreciation Box",
        category: "Employee",
        price: "From $65",
        image: "/assets/generated_images/Employee_appreciation_gift_set_6548d5da.png",
        description: "Personalized items including notebook, premium pen, coffee mug, and treats.",
        stock: 56,
      },
      {
        name: "Festive Holiday Hamper",
        category: "Festive",
        price: "From $110",
        image: "/assets/generated_images/Festive_corporate_gift_hamper_941be143.png",
        description: "Seasonal delights with gourmet treats, wine, and holiday decorations.",
        stock: 32,
      },
      {
        name: "Executive Gift Set",
        category: "Executive",
        price: "From $200",
        image: "/assets/generated_images/Premium_executive_gift_box_3b1264b9.png",
        description: "Luxury leather goods, premium accessories, and personalized executive items.",
        stock: 12,
      },
    ];

    const productIds: string[] = [];
    initialProducts.forEach((product) => {
      const id = randomUUID();
      productIds.push(id);
      this.products.set(id, { ...product, id, stock: product.stock ?? 0 });
    });

    const sampleOrders: (Omit<Order, "id"> & { id?: string })[] = [
      {
        company: "Tech Solutions Inc",
        amount: "$2,450",
        status: "pending",
        date: new Date("2025-01-15"),
        items: JSON.stringify([{ productId: productIds[0], quantity: 25 }]),
      },
      {
        company: "Global Finance Corp",
        amount: "$5,200",
        status: "completed",
        date: new Date("2025-01-14"),
        items: JSON.stringify([{ productId: productIds[1], quantity: 50 }]),
      },
      {
        company: "Marketing Pro Agency",
        amount: "$1,850",
        status: "processing",
        date: new Date("2025-01-13"),
        items: JSON.stringify([{ productId: productIds[2], quantity: 15 }]),
      },
    ];

    sampleOrders.forEach((order) => {
      const id = randomUUID();
      this.orders.set(id, { ...order, id } as Order);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id, stock: insertProduct.stock ?? 0 };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: string, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updated = { ...product, ...updates };
    this.products.set(id, updated);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getInquiry(id: string): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const inquiry: Inquiry = { 
      ...insertInquiry,
      phone: insertInquiry.phone ?? null,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values()).sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  }

  async getOrder(id: string): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = randomUUID();
    const order: Order = { 
      ...insertOrder,
      status: insertOrder.status ?? "pending",
      id,
      date: new Date(),
    };
    this.orders.set(id, order);
    return order;
  }

  async updateOrder(id: string, updates: Partial<InsertOrder>): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (!order) return undefined;
    
    const updated = { ...order, ...updates };
    this.orders.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();

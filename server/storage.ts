import { 
  Service, InsertService,
  Testimonial, InsertTestimonial,
  Contact, InsertContact
} from "@shared/schema";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private testimonials: Map<number, Testimonial>;
  private contacts: Map<number, Contact>;
  private currentServiceId: number;
  private currentTestimonialId: number;
  private currentContactId: number;

  constructor() {
    this.services = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    this.currentServiceId = 1;
    this.currentTestimonialId = 1;
    this.currentContactId = 1;

    // Seed initial services
    const initialServices: InsertService[] = [
      {
        title: "1-on-1 Personal Training",
        description: "Personalized training sessions tailored to your goals",
        price: "$80/session",
        features: ["Custom workout plans", "Nutrition guidance", "Progress tracking", "Weekly check-ins", "Flexibility training"]
      },
      {
        title: "Group Training",
        description: "High-energy group workouts for all fitness levels",
        price: "$30/session",
        features: ["Fun atmosphere", "Team motivation", "Varied exercises", "Social support", "Affordable pricing"]
      },
      {
        title: "Online Coaching",
        description: "Remote training with expert guidance",
        price: "$199/month",
        features: ["24/7 support", "Video form checks", "Custom meal plans", "Monthly challenges", "Private community"]
      }
    ];

    initialServices.forEach(service => this.createService(service));

    // Seed initial testimonials
    const initialTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        text: "Amazing trainer! Helped me achieve my fitness goals in just 3 months. The personalized attention and motivation kept me going.",
        rating: 5,
        date: new Date("2024-01-15")
      },
      {
        name: "Mike Peters",
        text: "The group sessions are incredible. Great energy and results! Made new friends while getting fit.",
        rating: 5,
        date: new Date("2024-02-01")
      },
      {
        name: "Emily Chen",
        text: "Online coaching worked perfectly with my busy schedule. The workout plans are challenging but achievable.",
        rating: 5,
        date: new Date("2024-02-10")
      }
    ];

    initialTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(service: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const newService = { ...service, id };
    this.services.set(id, newService);
    return newService;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const newContact = { ...contact, id };
    this.contacts.set(id, newContact);
    return newContact;
  }
}

export const storage = new MemStorage();
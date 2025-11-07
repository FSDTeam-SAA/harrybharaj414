"use client";

import Image from "next/image";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";

// ✅ Schema: define correct field types
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type FormData = z.infer<typeof formSchema>;

const ContactMessage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    },
  });

  const services = [
    { title: "Work Visa Consulting", id: "1" },
    { title: "Study Visa Consulting", id: "2" },
    { title: "Immigration & Settlement Services", id: "3" },
    { title: "Career & CV Guidance", id: "4" },
    { title: "Documentation & Application Support", id: "5" },
    // { title: "Post Landing Assistance", id: "6" },
  ];

  const onSubmit = async (data: FormData) => {
    try {
      toast.success("Your Message has been Sented");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      return res;
      form.reset();
    } catch (error) {
      toast.error(`${error} || 'Failed to sent message`);
    } finally {
      console.log("nice");
    }
    console.log("✅ Form Submitted:", data);
  };

  return (
    <section className="my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left Image */}
          <div className="relative w-[80%] mx-auto rounded-xl overflow-hidden ">
            {/* Background Image */}
            <Image
              src="/images/contact1.jpeg"
              alt="Professional consultant smiling with camera"
              width={768}
              height={680}
              className="object-cover "
              loading="lazy"
            />

            <div className="  flex flex-col items-center justify-center gap-4 text-blue-400">
              <h3 className="text-xl font-semibold  mt-5 tracking-wide">
                Connect With Us
              </h3>

              <div className="flex gap-4">
                {/* Email */}
                {/* <Link
                  href="mailto:harrysingh@destinyabroad.ae"
                  className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full border border-white/30 hover:bg-blue-600 transition-all"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-white" />
                </Link> */}

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/harry_bharaj34"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10  bg-pink-600 hover:bg-pink-700 rounded-full transition-colors group"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@HARRYSINGHEUROPA"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full transition-colors group"
                  title="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                </Link>
              </div>

              {/* <p className="mt-4 text-sm opacity-90">
                harrysingh@destinyabroad.ae
              </p> */}
            </div>
          </div>
          {/* Right Form */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                aria-label="Contact consultation form"
              >
                {/* First / Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ✅ Services */}
                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Services</FormLabel>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        {services.map((item) => {
                          const checked = field.value.includes(item.title);
                          return (
                            <div
                              key={item.id}
                              className="flex items-start space-x-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(isChecked) => {
                                    const newValue = isChecked
                                      ? [...field.value, item.title]
                                      : field.value.filter(
                                          (val) => val !== item.title
                                        );
                                    field.onChange(newValue);
                                  }}
                                />
                              </FormControl>
                              <div className="leading-tight text-sm">
                                <p>{item.title}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                >
                  Book a Consultation
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;

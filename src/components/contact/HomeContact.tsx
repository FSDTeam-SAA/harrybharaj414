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

// ✅ Validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  privacy: z
    .boolean()
    .refine((val) => val === true, "You must agree to the privacy policy"),
});

type FormData = z.infer<typeof formSchema>;

const HomeContact = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("✅ Form Submitted:", data);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wide">
            Book a Consultation
          </p>
          <h2
            id="contact-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2 mb-4"
          >
            Trusted Immigration & Visa Consulting
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We assist clients from India, Nepal, and GCC countries with reliable
            visa, study, and immigration services to help them build a
            successful future abroad.
          </p>
        </header>

        {/* Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="rounded-xl overflow-hidden w-full aspect-5/4">
            <Image
              src="/contact.jpg"
              alt="Professional consultant smiling with camera"
              width={775}
              height={570}
              className="object-cover w-full h-full"
              loading="lazy"
            />
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

                {/* Privacy Policy */}
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="leading-tight text-sm">
                        <span>
                          You agree to our friendly{" "}
                          <a
                            href="/privacy-policy"
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            privacy policy
                          </a>
                          .
                        </span>
                        <FormMessage />
                      </div>
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

export default HomeContact;

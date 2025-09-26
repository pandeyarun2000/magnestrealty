"use client";

import React, { useState } from 'react';
import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionBadge from "@/components/ui/section-badge";
import emailjs from '@emailjs/browser';
import { Mail, Users, Send } from 'lucide-react';


interface RentalApplicationFormProps {
  propertyId: string;
}

export default function RentalApplicationForm({ propertyId }: RentalApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    creditScore: '',
    monthlyIncome: '',
    employmentType: '',
    employmentLength: '',
    familyMembers: '',
    landlordReference: '',
    referencesAvailable: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        'service_r5lkbnm',
        'template_7oo4o15',
        { ...formData, propertyId },
        'nLux-BOWsIAe53c22'
      );
      console.log(result.text);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        creditScore: '',
        monthlyIncome: '',
        employmentType: '',
        employmentLength: '',
        familyMembers: '',
        landlordReference: '',
        referencesAvailable: '',
      });
      alert('Thank you for your application. We will get back to you soon!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  

  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <div className="max-w-md mx-auto text-center">
              <SectionBadge title="Rental Application" />
              <h2 className="text-3xl lg:text-4xl font-semibold mt-6">Apply to Rent</h2>
              <p className="text-muted-foreground mt-6">Please fill out the form below to apply for this property</p>
            </div>

            <Card className="w-full max-w-2xl mt-12 shadow-lg">
              <CardHeader>
                <CardTitle>Rental Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="creditScore">Credit Score</Label>
                    <Input
                      type="number"
                      id="creditScore"
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income</Label>
                    <Input
                      type="number"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employmentType">Employment Type</Label>
                    <Select name="employmentType" onValueChange={(value) => setFormData({ ...formData, employmentType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullTime">Full-time</SelectItem>
                        <SelectItem value="partTime">Part-time</SelectItem>
                        <SelectItem value="selfEmployed">Self-employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employmentLength">Length of Employment (years)</Label>
                    <Input
                      type="number"
                      id="employmentLength"
                      name="employmentLength"
                      value={formData.employmentLength}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="familyMembers">Number of Family Members</Label>
                    <Input
                      type="number"
                      id="familyMembers"
                      name="familyMembers"
                      value={formData.familyMembers}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="landlordReference">Landlord Reference Available?</Label>
                    <Select name="landlordReference" onValueChange={(value) => setFormData({ ...formData, landlordReference: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referencesAvailable">References Available?</Label>
                    <Select name="referencesAvailable" onValueChange={(value) => setFormData({ ...formData, referencesAvailable: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 bg-card p-8 rounded-lg w-full max-w-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Magnest AI</h3>
                    <p className="text-sm text-muted-foreground">Simplified Property Management</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-sm text-muted-foreground">realty@magnest.ca</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  
                  
                </div>
              </div>
            </div>
          
          </div>
        </Container>
      </Wrapper>
    </section>
  );
}


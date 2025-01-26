import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button"; // Capitalized if the file is named `Button.js`
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import FileUpload from "./FailUpload";
import { Slip } from "./Slip";
import { PersonalInfo } from "./PersonalInfo";
import { GuarantorInfo } from "./GuarantorInfo";

const formSchema = z.object({
  guarantor1: z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    location: z
      .string()
      .min(2, { message: "Location must be at least 2 characters." }),
    cnic: z
      .string()
      .regex(/^[0-9]{13}$/, { message: "CNIC must be 13 digits." }),
  }),
  guarantor2: z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    location: z
      .string()
      .min(2, { message: "Location must be at least 2 characters." }),
    cnic: z
      .string()
      .regex(/^[0-9]{13}$/, { message: "CNIC must be 13 digits." }),
  }),
  personalInfo: z.object({
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters." }),
    phoneNumber: z
      .string()
      .regex(/^[0-9]{11}$/, { message: "Phone number must be 11 digits." }),
  }),
  statement: z.any().optional(),
  salarySheet: z.any().optional(),
});

export function LoanRequestForm() {
  const [slipData, setSlipData] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guarantor1: { name: "", email: "", location: "", cnic: "" },
      guarantor2: { name: "", email: "", location: "", cnic: "" },
      personalInfo: { address: "", phoneNumber: "" },
    },
  });

  function onSubmit(values) {
    console.log(values);

    const slipNumber = Math.floor(100000 + Math.random() * 900000);
    const appointmentDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    setSlipData({
      slipNumber,
      appointmentDate: appointmentDate.toLocaleDateString(),
      appointmentTime: "10:00 AM",
      officeLocation: "123 Main St, City, Country",
      ...values,
    });
  }

  if (slipData) {
    return <Slip data={slipData} />;
  }

  return (
    <Card className="w-11/12  max-w-4xl mx-auto ">
      <CardHeader>
        <CardTitle>Loan Request Form</CardTitle>
        <CardDescription>
          Please fill out all required information to submit your loan request.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <GuarantorInfo form={form} name="guarantor1" title="Guarantor 1" />
            <GuarantorInfo form={form} name="guarantor2" title="Guarantor 2" />
            <PersonalInfo form={form} />
            <FileUpload
              form={form}
              name="statement"
              label="Statement (Optional)"
            />
            <FileUpload
              form={form}
              name="salarySheet"
              label="Salary Sheet (Optional)"
            />
            <Button type="submit">Submit Loan Request</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

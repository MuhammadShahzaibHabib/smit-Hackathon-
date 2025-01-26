import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";

export function Slip({ data }) {
  const qrCodeData = JSON.stringify({
    slipNumber: data.slipNumber,
    appointmentDate: data.appointmentDate,
    appointmentTime: data.appointmentTime,
    officeLocation: data.officeLocation,
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Request Slip</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">Slip Number:</h3>
            <p>{data.slipNumber}</p>
          </div>
          <QRCodeSVG value={qrCodeData} size={128} />
        </div>
        <div>
          <h3 className="font-semibold">Appointment Details:</h3>
          <p>Date: {data.appointmentDate}</p>
          <p>Time: {data.appointmentTime}</p>
          <p>Location: {data.officeLocation}</p>
        </div>
        <div>
          <h3 className="font-semibold">Personal Information:</h3>
          <p>Address: {data.personalInfo.address}</p>
          <p>Phone Number: {data.personalInfo.phoneNumber}</p>
        </div>
        <div>
          <h3 className="font-semibold">Guarantor 1:</h3>
          <p>Name: {data.guarantor1.name}</p>
          <p>Email: {data.guarantor1.email}</p>
          <p>Location: {data.guarantor1.location}</p>
          <p>CNIC: {data.guarantor1.cnic}</p>
        </div>
        <div>
          <h3 className="font-semibold">Guarantor 2:</h3>
          <p>Name: {data.guarantor2.name}</p>
          <p>Email: {data.guarantor2.email}</p>
          <p>Location: {data.guarantor2.location}</p>
          <p>CNIC: {data.guarantor2.cnic}</p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Print Slip
        </button>
      </CardContent>
    </Card>
  );
}

import { NextRequest, NextResponse } from "next/server";

type BookingPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  pet?: unknown;
  service?: unknown;
  date?: unknown;
  time?: unknown;
  note?: unknown;
};

const requiredFields: Array<keyof BookingPayload> = [
  "name",
  "phone",
  "pet",
  "service",
  "date",
  "time"
];

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let payload: BookingPayload;

  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json(
      { message: "预约信息格式不正确，请检查后再提交。" },
      { status: 400 }
    );
  }

  const missingFields = requiredFields.filter((field) => !readText(payload[field]));

  if (missingFields.length > 0) {
    return NextResponse.json(
      { message: "请填写完整的预约信息。", fields: missingFields },
      { status: 400 }
    );
  }

  const email = readText(payload.email);

  if (email && !isEmail(email)) {
    return NextResponse.json(
      { message: "联系邮箱格式不正确。" },
      { status: 400 }
    );
  }

  const booking = {
    id: crypto.randomUUID(),
    name: readText(payload.name),
    phone: readText(payload.phone),
    email,
    pet: readText(payload.pet),
    service: readText(payload.service),
    date: readText(payload.date),
    time: readText(payload.time),
    note: readText(payload.note),
    createdAt: new Date().toISOString()
  };

  console.info("New booking request", booking);

  return NextResponse.json(
    {
      message: "预约信息已提交，稍后护理顾问会与你确认具体时段。",
      bookingId: booking.id
    },
    { status: 201 }
  );
}

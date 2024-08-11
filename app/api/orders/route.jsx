import client from "@/app/sanity";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);
    const { firstname, lastname, email, address, wilaya, phone, products, totalAmount, status } = body;

    const order = await client.create({
      _type: 'order',
      firstname,
      lastname,
      email,
      address,
      wilaya,
      phone,
      products,
      totalAmount,
      status,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
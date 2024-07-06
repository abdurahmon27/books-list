"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { PiPlusBold } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, Modal, Form, Input } from "antd";
import { CreateBook } from "./create-book";

export const Books = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setIsModalVisible(false);
        // Handle form submission here
        console.log("Form values:", values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container min-h-screen mx-auto py-5">
      {/* Header for books */}
      <div className="w-full flex items-center justify-between max-md:flex-col">
        <div className="text-white text-3xl flex items-start justify-start flex-col tracking-wide">
          <span>
            You{"'"}ve got <span className="text-[#6200EE]">7 book</span>
          </span>
          <span className="text-xl mt-4">Your books today</span>
        </div>
        <div>
          <Button
            className="mt-5 text-white flex items-center justify-center space-x-2"
            onClick={showModal}
          >
            <PiPlusBold />
            <span>Create a book</span>
          </Button>
        </div>
      </div>
      {/* Books */}
      <div className="w-full h-auto mt-10 flex items-start gap-3 justify-center flex-wrap">
        <Card className="w-[350px] max-md:w-[280px] h-auto leading-4">
          <CardHeader>
            <CardTitle className="font-semibold tracking-wide">
              Book title
            </CardTitle>
            <CardDescription>Book description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              <li>Cover: http://url.to.book.cover</li>
              <li>Pages: 350</li>
              <li>Published: 2021</li>
              <li>Isbn: 123456789</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span>William Shakespeare</span>
            <Badge count="Reading" color="yellow" />
          </CardFooter>
        </Card>
        <Card className="w-[350px] max-md:w-[280px] h-auto leading-4">
          <CardHeader>
            <CardTitle className="font-semibold tracking-wide">
              Book title
            </CardTitle>
            <CardDescription>Book description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              <li>Cover: http://url.to.book.cover</li>
              <li>Pages: 350</li>
              <li>Published: 2021</li>
              <li>Isbn: 123456789</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span>William Shakespeare</span>
            <Badge count="New" />
          </CardFooter>
        </Card>
        <Card className="w-[350px] max-md:w-[280px] h-auto leading-4">
          <CardHeader>
            <CardTitle className="font-semibold tracking-wide">
              Book title
            </CardTitle>
            <CardDescription>Book description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              <li>Cover: http://url.to.book.cover</li>
              <li>Pages: 350</li>
              <li>Published: 2021</li>
              <li>Isbn: 123456789</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span>William Shakespeare</span>
            <Badge count="Finished" color="green" />
          </CardFooter>
        </Card>
      </div>

      <Modal
        title="Create a new book"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <CreateBook form={form} />
      </Modal>
    </div>
  );
};

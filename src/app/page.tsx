import React from "react";
import { redirect } from "next/navigation";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, Column } from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import { about, person } from "@/app/resources/content";

export default function Home() {
  redirect("/about");
  return null;
}

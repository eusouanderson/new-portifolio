import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Navbar } from "../navbar";
import { NavbarTexts } from "@/types/texts";

const mockNavbarText: NavbarTexts = {
  home: "Início",
  aboutMe: "Sobre mim",
  workExp: "Carreira",
  tech: "Skills",
  ai: "Ecossistema IA",
  chat: "Chat IA",
  projects: "Projetos",
  contact: "Contato",
};

describe("Navbar", () => {
  it("renders navigation items properly", () => {
    render(<Navbar text={mockNavbarText} />);

    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Sobre mim")).toBeInTheDocument();
    expect(screen.getByText("Carreira")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Ecossistema IA")).toBeInTheDocument();
    expect(screen.getByText("Chat IA")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
  });

  it("handles navigation click smoothly", async () => {
    const user = userEvent.setup();
    render(<Navbar text={mockNavbarText} />);

    const link = screen.getByText("Skills");
    await user.click(link);
    expect(link).toBeInTheDocument();
  });
});

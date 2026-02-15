import { notFound } from "next/navigation";
import { games } from "@/constants";
import TicTacToeSetup from "@/components/games/tic-tac-toe/setup";

export default async function GamePage({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const { game } = await params;

  const selectedGame = games.find((g) => g.slug === game);

  if (!selectedGame) return notFound();

  if (selectedGame.slug === "tic-tac-toe") {
    return <TicTacToeSetup />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      Game coming soon...
    </div>
  );
}

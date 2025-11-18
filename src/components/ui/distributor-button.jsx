import { Button } from "./button";

const DistributorButton = () => {
  return (
    <Button
      variant="outline"
      className="px-6 py-3 rounded-md border-lime-700 text-lime-700 hover:bg-lime-50"
      onClick={() => {
        const message = `Hello, I would like to become a distributor. How can I get started.`;
        const url = `https://api.whatsapp.com/send/?phone=2349059296155&text=${encodeURIComponent(
          message
        )}`;

        window.open(url, "_blank");
      }}
    >
      Become a Distributor
    </Button>
  );
};

export default DistributorButton;

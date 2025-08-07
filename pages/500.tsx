import StatusHttpPage from "@/components/geral/status-http";

export default function Custom500() {
  return (
    <>
      <StatusHttpPage
        message="Tivemos um imprevisto técnico, mas já estamos trabalhando para resolver."
        statusCode={500}
        title="Calma, nossos engenheiros já vestiram os capacetes. 👷⚙️"
      />
    </>
  );
}

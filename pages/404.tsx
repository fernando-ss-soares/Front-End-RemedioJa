import StatusHttpPage from "@/components/geral/status-http";

export default function Custom404() {
  return (
    <>
      <StatusHttpPage
        message="Não se preocupe, vamos te ajudar a encontrar o caminho de volta."
        statusCode={404}
        title="Ops! Parece que esta página tirou férias. 🏝️"
      />
    </>
  );
}

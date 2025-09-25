// --- Listas de proyectos, PO y DEV ---
const proyectos = [
  "MRC.UFT.Administration.Strategic",
  "MRC.ATMex.Treasury.TransferOrders",
  "MRC.ATMex.Administration.Vehicles",
  "MRC.RUA.HumanResources.IntelexionPensionPlans",
  "MRC.UFV.Students.SocialService",
  "MRC.DTI.Administration.ChargeBack",
  "MRC.ATMex.Treasury.TIPFiles",
  "MRC.ATMex.Apostolados.CashManagement",
  "MRC.ATMex.HumanResources.LegalFiles",
  "MRC.OGS.Caja.Cobranza",
  "MRC.DTI.Finance.BankCommunications",
  "MRC.SSTI.Administration.ADProcesses",
  "MRC.UFVSpain.IT.AgoraDebtors",
  "MRC.DTI.ActiveDirectory.ACG",
  "MRC.DTI.ArchitectureDevelopment.SAPIncidents",
  "MRC.DTI.HumanResources.SuccessFactors",
  "MRC.LCRC.Administration.CardsControl",
  "MRC.AG.SistemasAdministrativos",
  "MRC.AG.Finance.BudgetReportAdjustments",
  "MRC.CRC.SG.SecretarialProcedures",
  "MRC.DTI.Administration.BDP",
  "MRC.AT-Mexico.Management.ATServicios",
  "MRC.ATMex.Administration.BankReconciliation",
  "MRC.ATChileArgentina.HumanResources.SelectionProcesses",
  "MRC.DTI.Infrastructure.Monitor",
  "MRC.DTI.Administration.LandingPage",
  "MRC.DTI.HumanResources.Positions",
  "MRC.DTI.Finance.Sat",
  "MRC.ORSColVen.Schools.RiskManagement",
  "MRC.DTI.AzureAD.StorageUsage",
  "MRC.LC.DGLC.DGContacts",
  "MRC.ATMex.Legal.ElectronicSignature",
  "MRC.AG.Administration.Debt",
  "MRC.DTI.ITSecurity.CaptivePortal",
  "MRC.ORSChilArg.Schools.Assessments",
  "MRC.ATMex.Eduexperts.SAPAccounting",
  "MRC.ATMex.HumanResources.IntelexionIncidents",
  "MRC.RUA.Payments.ElectronicPayments",
  "MRC.DTI.SAP.Tools",
  "MRC.DTI.ActiveDirectory.Security",
  "MRC.DTI.Finance.SapIntegration",
  "MRC.SSTI.Administration.Tickets",
  "MRC.SG.Administration.SisecMember",
  "MRC.DTI.ActiveDirectory.ACC",
  "MRC.ATMex.Audit.FinanceData",
  "MRC.AG.Administration.CentralizedPayments",
  "MRC.ATMex.Administration.BankReconciliationReports",
  "MRC.AG.Administration.BIFinanzas",
  "MRC.AG.Finance.ActivityControl",
  "MRC.ORSColVen.Schools.Assessments",
  "MRC.AGOC.CE.GlobalStudentPopulation",
  "MRC.DTI.Budget.WFBudgetChanges",
  "MRC.ATMex.Legal.SignaturesControl",
  "MRC.DTI.HumanResources.Badges",
  "MRC.ATMex.Administration.Ark",
  "MRC.AG.Budget.DataLoaderControl",
  "MRC.DTI.ArchitectureDevelopment.DevOpsAdmins",
  "MRC.AT-Mexico.ContinousImprovement.InnovationMailbox",
  "MRC.ORSSpain.Administration.SharepointSites",
  "MRC.ATMex.Apostolados.RCSections",
  "MRC.Colegios.Alumnado.BI",
  "MRC.ORSColVen.Schools.BudgetReportAdjustments",
  "MRC.ATMex.Comptroller.TaxNotes",
  "MRC.DTI.Graph.Tools",
  "MRC.SG.Administration.Protocolos",
  "MRC.SG.Administration.SisecBI",
  "MRC.DTI.HumanResources.Payroll",
  "MRC.AT-CHILE.Administration.FinancialIntegrationBUK",
  "MRC.ATChile.Administration.Buk",
  "MRC.DTI.ArchitectureDevelopment.OperationalSupport",
  "MRC.DTI.Dev.Tools",
  "MRC.ATMex.Comptroller.IncomeTaxReturn",
  "MRC.DTI.Dev.Utilities",
  "MRC.DTI.HumanResources.PayrollReceipts",
  "MRC.DTI.HumanResources.PayrollCfdiReconciliation",
  "MRC.SG.Administration.Sisec4",
  "MRC.OGSSEG.Administration.AccountReconciliation",
  "MRC.UFT.Payments.Expenses",
  "MRC.ATMex.Finance.Treasury",
  "MRC.DTI.M365.Tools",
  "SisecWellArchitectedSecurity",
  "MRC.LCRC.Administration.OneCardReports",
  "MRC.SG.Administration.BIRP4",
  "MRC.UFT.Administration.Financial",
  "MRC.ATMex.Administration.Communities",
  "MRC.DTI.HumanResources.H2HPayroll",
  "MRC.AG.Administration.PurchaseCards",
  "MRC.RCSA.Finance.Reports",
  "MRC.AT-Mexico.ContinousImprovement.TransformATAlerts",
  "MRC.RCSA.Budget.ConfigTasks",
  "MRC.DTI.Finance.BankFiles",
  "MRC.DTI.SuccessFactors.Budget",
  "MRC.DTI.Finance.Payroll",
  "Capacitación_SAP_Basis",
  "MRC.FRC.Nmex.Sensus",
  "MRC.ATMex.Treasury.BankAccounts",
  "MRC.ATMex.Apostolados.ApostolicWorks",
  "MRC.OGSSEG.Legal.ElectronicSignature",
  "MRC.Universidades.RUA.BI",
  "MRC.UFT.Administration.Academic",
  "MRC.ATItaly.Finance.ExpensesControl",
  "MRC.ATMex.Administration.Suppliers",
  "MRC.RUA.Payments.Expenses",
  "MRC.SSTI.Administration.PW",
  "MRC.DTI.LC.Surveys",
  "ZeroTrustAssessment",
  "MRC.DTI.Administration.Collection",
  "MRC.DTI.SAP.CentralProcessManager",
  "MRC.IIFF.ArchivoHistorico.SIAH",
  "MRC.ATMex.Administration.Sicat",
  "MRC.SG.Administration.Sisec",
  "MRC.AG.Finance.PayrollRecord",
  "MRC.ATEsp.Treasury.FundsTransfer",
  "MRC.DTI.RegnumChristi.Candidates",
  "MRC.ATChile.Comptroller.AlexiaAccounting",
  "MRC.AT-Mexico.Legal.ColdFileMexico",
  "MRC.AG.Administration.PettyCash",
  "MRC.DTI.AdministrativeServices.SAPFinance",
  "MRC.AT-NorteAmerica.FoundRaising.ADGroupTypeChange",
  "MRC.AT-Mexico.HumanCapital.EmployeeRelations",
  "MRC.DTI.Administration.TravelExpenses",
  "MRC.AG.Administration.PrepaidCards",
  "MRC.DTI.Utilities"
];

const poList = [
  "Samuel Borjas Ortiz","Marco Antonio Castillo Niño","Juan Alberto Estrada Pequeño",
  "Alfonso Gonzalez Chavez","Joel Gutiérrez Sifuentes","Hector Jose Montalvo Herrera",
  "Javier Rodriguez Alarcon","Ricardo Cancino González Alonso Huerta Fany Vianey",
  "Díaz Serrano Violeta Berenice","Hernández Hernández Estrella Guadalupe",
  "Triana Colunga Kely Yesenia","Zúñiga Montes Marcela","Hernandez Canizales Hali",
  "Jiménez Jiménez Claudia","Moreno Cárdenas Cinthya","Pineda Rodríguez Sandra Yadira",
  "Terreros Espinosa Miriam","Victoria García Mariana"
];

const devList = [
  "Ángel Perez Luis","Clemente Carrillo Moreno","Antonio Cruz Cortés",
  "Marco Antonio Flores Torres","Carlos Heredia Goitia","Alberto Honorato Mejía",
  "Alberto Antonio López González","Francisco Lozada Badillo","Oscar Javier Lozano Velázquez",
  "Roberto Valentín Martínez Delgado","Hector Jose Montalvo Herrera","Carlos Avelino Morales",
  "Juan Jose Ortigoza Jimenez","Daniel Peña","Ignacio Ramírez Osorio",
  "Juan Carlos Velázquez López","Alejandra Dorantes Martínez","Sara López Luévano",
  "Ana Karina Pacheco Luna","Lisbeth Peña Pacheco","Yesenia Reséndiz Vázquez"
];

// --- Utilidad para formatear fecha ---
function formatearFecha(fecha) {
  if (!fecha) return "";
  const [a, m, d] = fecha.split("-");
  return `${d}/${m}/${a}`;
}

// --- Llenar datalists ---
function llenarDatalist(id, data) {
  const dl = document.getElementById(id);
  data.forEach(item => {
    let opt = document.createElement("option");
    opt.value = item;
    dl.appendChild(opt);
  });
}

llenarDatalist("listaProyectos", proyectos);
llenarDatalist("listaPO", poList);
llenarDatalist("listaDEV", devList);

// --- Manejo de bitácora ---
const form = document.getElementById("projectForm");
const history = document.getElementById("history");
const searchInput = document.getElementById("searchInput");
const exportBtn = document.getElementById("exportCSV");

let records = JSON.parse(localStorage.getItem("bitacora")) || [];

function guardar() {
  localStorage.setItem("bitacora", JSON.stringify(records));
}

function render() {
  history.innerHTML = "";
  records.forEach((rec, idx) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <p><strong>📅 Inicio:</strong> ${rec.inicio}</p>
      <p><strong>📅 Fin:</strong> ${rec.fin}</p>
      <p><strong>📌 Proyecto:</strong> ${rec.proyecto}</p>
      <p><strong>👤 PO:</strong> ${rec.po}</p>
      <p><strong>💻 DEV:</strong> ${rec.dev}</p>
      <button class="delete-btn" data-idx="${idx}">🗑 Eliminar</button>
    `;
    history.appendChild(card);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const rec = {
    inicio: formatearFecha(document.getElementById("fechaInicio").value),
    fin: formatearFecha(document.getElementById("fechaFin").value),
    proyecto: document.getElementById("proyecto").value,
    po: document.getElementById("po").value,
    dev: document.getElementById("dev").value
  };
  records.push(rec);
  guardar();
  render();
  form.reset();
});

history.addEventListener("click", e => {
  if (e.target.classList.contains("delete-btn")) {
    const idx = e.target.getAttribute("data-idx");
    records.splice(idx, 1);
    guardar();
    render();
  }
});

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = c.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});

exportBtn.addEventListener("click", () => {
  let csv = "Inicio,Fin,Proyecto,PO,DEV\n";
  records.forEach(r => {
    csv += `${r.inicio},${r.fin},"${r.proyecto}","${r.po}","${r.dev}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bitacora.csv";
  a.click();
  URL.revokeObjectURL(url);
});

// Inicial render
render();

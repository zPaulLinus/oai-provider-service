const ListRecords = 
`<oai-pmh xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/ 
http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="ListRecords" metadataprefix="oai_dc">http://localhost/openaire/oai</request><listrecords><record><header><identifier identifiertype="doi">ID</identifier><setspec>openaire_data</setspec><datestamp>2020-01-01</datestamp></header><metadata><datacite:resource xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:datacite="http://datacite.org/schema/kernel-4" xmlns="http://namespace.openaire.eu/schema/oaire/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/oai_dc/ https://www.openaire.eu/schema/repo-lit/4.0/openaire.xsd"><datacite:titles><title>TITLE</title></datacite:titles><datacite:identifier identifiertype="URL">https://doi.org/ID</datacite:identifier><datacite:descriptions><description descriptiontype="Abstract">DATADESCRIPTION</description></datacite:descriptions><datacite:dates><datacite:date datetype="Issued">2020-01-01</datacite:date><datacite:date datetype="Available">2020-01-01</datacite:date></datacite:dates><datacite:publicationyear>2021</datacite:publicationyear><datacite:creators><creator><creatorname>CREATOR</creatorname><affiliation></affiliation></creator></datacite:creators><datacite:publisher>PUBLISHER</datacite:publisher><datacite:version>1</datacite:version><datacite:rightslist><datacite:rights rightsuri="info:eu-repo/semantics/openAccess">OpenAccess</datacite:rights></datacite:rightslist></datacite:resource></metadata></record></listrecords></oai-pmh>`

const ListIdentifiers = 
`<oai-pmh xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/ 
http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="ListIdentifiers" metadataprefix="oai_dc">http://localhost/openaire/oai</request><listidentifiers><record><header><identifier>ID</identifier><datestamp>2021-06-29T16:08:13Z</datestamp></header></record></listidentifiers></oai-pmh>`

const Identify = 
`<oai-pmh xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/ 
http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="Identify">http://localhost/openaire/oai</request><identify><repositoryname>Scicat Provider</repositoryname><baseurl>http://localhost/openaire/oai</baseurl><protocolversion>2.0</protocolversion><adminemail>email@email</adminemail><earliestdatestamp>2017-01-00T03:24:00Z</earliestdatestamp><deletedrecord>no</deletedrecord><granularity>YYYY-MM-DDThh:mm:ssZ</granularity></identify></oai-pmh>`

const GetRecord = 
`<oai-pmh xmlns="http://www.openarchives.org/OAI/2.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dc="http://purl.org/dc/elements/1.1/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/ 
http://www.openarchives.org/OAI/2.0/OAI-PMH.xsd"><request verb="GetRecord" metadataprefix="oai_dc" identifier="ID">http://localhost/openaire/oai</request><record><header><identifier identifiertype="doi">ID</identifier><setspec>openaire_data</setspec><datestamp>2020-01-01</datestamp></header><metadata><datacite:resource xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:datacite="http://datacite.org/schema/kernel-4" xmlns="http://namespace.openaire.eu/schema/oaire/" xsi:schemalocation="http://www.openarchives.org/OAI/2.0/oai_dc/ https://www.openaire.eu/schema/repo-lit/4.0/openaire.xsd"><datacite:titles><title>TITLE</title></datacite:titles><datacite:identifier identifiertype="URL">https://doi.org/ID</datacite:identifier><datacite:descriptions><description descriptiontype="Abstract">DATADESCRIPTION</description></datacite:descriptions><datacite:dates><datacite:date datetype="Issued">2020-01-01</datacite:date><datacite:date datetype="Available">2020-01-01</datacite:date></datacite:dates><datacite:publicationyear>2021</datacite:publicationyear><datacite:creators><creator><creatorname>CREATOR</creatorname><affiliation></affiliation></creator></datacite:creators><datacite:publisher>PUBLISHER</datacite:publisher><datacite:version>1</datacite:version><datacite:rightslist><datacite:rights rightsuri="info:eu-repo/semantics/openAccess">OpenAccess</datacite:rights></datacite:rightslist></datacite:resource></metadata></record></oai-pmh>`

export const openaire = {
    ListRecords: ListRecords,
    ListIdentifiers: ListIdentifiers,
    Identify: Identify,
    GetRecord: GetRecord,
}
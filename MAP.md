# Mzansi Crime Idle: Progression Map

The following flowchart outlines the logical progression trip through the provinces of South Africa.

```mermaid
graph TD
    %% Nodes
    Start((Start))
    GP[<b>Gauteng</b><br/><i>The Concrete Jungle</i><br/>Focus: Violent Crime & Fraud]
    MP[<b>Mpumalanga</b><br/><i>The Powerhouse</i><br/>Focus: Energy & Coal]
    LP[<b>Limpopo</b><br/><i>The Gateway</i><br/>Focus: Smuggling & Wildlife]
    NW[<b>North West</b><br/><i>The Platinum Belt</i><br/>Focus: Mining & Gambling]
    FS[<b>Free State</b><br/><i>The Breadbasket</i><br/>Focus: Agriculture & Gold]
    NC[<b>Northern Cape</b><br/><i>The Desert</i><br/>Focus: Diamonds & Solar]
    KZN[<b>KwaZulu-Natal</b><br/><i>The Harbor</i><br/>Focus: Logistics & Import/Export]
    EC[<b>Eastern Cape</b><br/><i>The Windy City</i><br/>Focus: Automotive & Livestock]
    WC[<b>Western Cape</b><br/><i>The Ganglands</i><br/>Focus: Organized Crime & Parliament]
    Kingpin((<b>Continental<br/>Kingpin</b>))

    %% Connections
    Start --> GP
    
    subgraph Phase 1: The Interior
    GP --> MP
    MP --> LP
    LP --> NW
    end

    subgraph Phase 2: The Heartland
    NW --> FS
    FS --> NC
    end

    subgraph Phase 3: The Coast
    NC --> KZN
    KZN --> EC
    EC --> WC
    end

    WC --> Kingpin

    %% Styling
    classDef region fill:#222,stroke:#f9a825,stroke-width:2px,color:#fff;
    classDef startend fill:#f9a825,stroke:#333,stroke-width:2px,color:#000;
    
    class GP,MP,LP,NW,FS,KZN,EC,NC,WC region;
    class Start,Kingpin startend;
import { useCallback, useEffect } from "react";
import { getProposalsContract } from "../constants/contracts";
import { Contract, ethers, isAddress } from "ethers";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import erc721 from "../constants/erc721.json";

const useTransfer = (to, tokenID) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    console.log ("values", to, tokenID);

    useEffect(()=>{

        const filter = {
            address: import.meta.env.VITE_ballot_contract_address,
            topics: [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            ],
        };
    
        const wssProvider = new ethers.WebSocketProvider(
            import.meta.env.VITE_wss_rpc_url
        );
    
        wssProvider.on(filter);
    
        return () => wssProvider.off(filter);

    }, []);

return useCallback(async () => {
    console.log("succesful 1", to, tokenID)
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    console.log("succesful 2", to, tokenID)
    const readWriteProvider = getProvider(walletProvider);
    console.log("succesful 3", to, tokenID)
    const signer = await readWriteProvider.getSigner();
    console.log("succesful 4")
    const contract = new ethers.Contract(import.meta.env.VITE_contract_address, erc721, signer);
    console.log("succesful 5")
    console.log("signer:", signer.address, "address", to, "tokenId", tokenID)

    try {
        const transaction = await contract.safeTransferFrom(signer.address, to, tokenID);
        console.log(transaction);

    } catch (error) {
        console.log(error)
    }
}

)
}

export default useTransfer

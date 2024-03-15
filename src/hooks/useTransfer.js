import { useCallback } from "react";
import { getProposalsContract } from "../constants/contracts";
import { Contract, ethers, isAddress } from "ethers";

const useTransfer = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

return useCallback(async (to, tokenID) => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    if(isAddress) return console.error("not address");
    const readWriteProvider = getProposalsContract(walletProvider);
    const signer = await ethers.getSigner(readWriteProvider);

    const contract = new ethers.Contract(import.meta.env.VITE_contract_address, erc721, signer);

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

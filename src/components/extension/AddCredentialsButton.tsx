import { useExtensionContext } from "@components/extension/useExtensionContext";
export const AddCredentialsButton = () => {
    const { showAddCredentialsModal, setShowAddCredentialsModal } = useExtensionContext();

    return (
        <button onClick={() => setShowAddCredentialsModal(!showAddCredentialsModal)} className="inline-flex border border-solid border-slate-400 hover:bg-slate-200 text-4xl font-bold rounded px-1">
            {showAddCredentialsModal ? 'x' : '+' }
        </button>
    )
}
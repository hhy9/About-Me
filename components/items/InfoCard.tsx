// 프로젝트 타이틀 / 설명 block
export default function InfoCard({ title = "Sara Lawrence", description = "Design in San Francisco" } : { title: string, description: string }) {
    return (
        <div>
            <div style={{letterSpacing: '0px', fontSize:'20px'}}>
                <h1>{title}</h1>  
            </div>
            <div style={{color: '#555555', fontSize:'14px'}}>
                <p>{description}</p>
            </div>
        </div>
    )
}